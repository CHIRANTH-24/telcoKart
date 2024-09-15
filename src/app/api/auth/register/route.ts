import { NextRequest } from "next/server";
import { hash } from "bcryptjs";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/lib/zod";
import { apiResponse } from "@/util/api-response";
import { sendOTPByMail } from "@/util/sendmail";
import { generateOTP } from "@/util/auth";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const parsed = RegisterSchema.safeParse(body);

  if (parsed.error) {
    return apiResponse(400, { message: "Invalid data" });
  }

  const { email, phone, password, designation, firstname, lastname, company } =
    parsed.data;

  const existingUser = await db.user.findFirst({
    where: {
      OR: [{ email }, { phone }],
    },
  });

  if (existingUser) {
    return apiResponse(401, { message: "User already exists! Please Login!!" });
  }

  const hashedPassword = await hash(password, 10);

  const user = await db.user.create({
    data: {
      email,
      phone,
      firstname,
      lastname,
      company,
      password: hashedPassword,
      Designation: designation,
    },
  });

  if (!user) {
    return apiResponse(500, {
      message: "Something went wrong! Failed to create user",
    });
  }

  const verification = await db.verification.create({
    data: {
      userId: user.id,
      emailOTP: generateOTP(),
      phoneOTP: generateOTP(),
    },
  });

  if (!verification) {
    console.error("Failed to create verification OTP's");
    return apiResponse(500, { message: "Something went wrong!! OTP not sent" });
  }

  // Todo: send otp to mobile

  //send otp to email
  const mailSent = await sendOTPByMail({
    recipientName: user.firstname,
    recipientEmail: user.email,
    otp: verification.emailOTP,
  });

  if (!mailSent) {
    return apiResponse(500, { message: "Something went wrong! OTP not sent!" });
  }

  const response = apiResponse(200, { message: "Success", data: body });

  return response;
}
