import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { apiResponse } from "@/util/api-response";
import { generateOTP } from "@/util/auth";
import { getUser } from "@/util/user";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { id } = body;

  if (!id) {
    return apiResponse(403, { message: "Invalid request" });
  }

  const user = await getUser({ id });

  if (!user) {
    return apiResponse(404, { message: "User not found" });
  }

  if (user.isVerified) {
    return apiResponse(200, { message: "Account is already verified!!" });
  }

  const verification = await db.verification.update({
    where: { userId: user.id },
    data: {
      emailOTP: generateOTP(),
      phoneOTP: generateOTP(),
    },
  });

  if (!verification) {
    return apiResponse(500, { message: "Something went wrong!!" });
  }

  //Todo: Send Email and SMS

  return apiResponse(200, {
    message: "OTP sent to the Email and Phone number!",
  });
}
