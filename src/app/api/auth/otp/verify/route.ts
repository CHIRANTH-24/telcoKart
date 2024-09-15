import { NextRequest } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { apiResponse } from "@/util/api-response";
import { COOKIE_NAME, COOKIE_OPTIONS, generateAccessToken } from "@/util/auth";
import { displayUser } from "@/util/user";
import { VerifySchema } from "@/lib/zod";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = VerifySchema.safeParse(body);

  if (parsed.error) {
    return apiResponse(400, { message: parsed.error.errors[0].message });
  }

  const { userId, emailOTP, phoneOTP } = parsed.data;

  const user = await db.user.findUnique({
    where: { id: userId },
    include: { verification: true },
  });

  if (!user) return apiResponse(404, { message: "User not found" });
  if (!user.verification) {
    return apiResponse(500, { message: "Something went wrong" });
  }

  if (user.verification.emailOTP !== emailOTP) {
    return apiResponse(400, { message: "Invalid Email OTP" });
  }
  if (user.verification.phoneOTP !== phoneOTP) {
    return apiResponse(400, { message: "Invalid Phone OTP" });
  }

  const verified = await db.verification.update({
    where: { userId: user.id },
    data: {
      emailVerified: true,
      phoneVerified: true,
      user: { update: { isVerified: true } },
    },
  });

  if (!verified) {
    return apiResponse(500, { message: "Failed to verify!!" });
  }

  const response = apiResponse(200, {
    message: "OTP verification successfull",
    data: displayUser(user),
  });

  const token = await generateAccessToken({ id: user.id, email: user.email });

  response.cookies.set(COOKIE_NAME, token, COOKIE_OPTIONS);

  return response;
}
