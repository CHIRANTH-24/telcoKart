import { NextRequest } from "next/server";
import { compare } from "bcryptjs";
import { db } from "@/lib/db";
import { LoginSchema } from "@/lib/zod";
import { apiResponse } from "@/util/api-response";
import { COOKIE_NAME, COOKIE_OPTIONS, generateAccessToken } from "@/util/auth";
import { displayUser } from "@/util/user";

export async function POST(req: NextRequest) {
  const body = (await req.json()) as LoginSchema;

  const parsed = LoginSchema.safeParse(body);

  if (parsed.error) {
    return apiResponse(400, { message: parsed.error.errors[0].message });
  }

  const { email, password: rawPassword } = parsed.data;

  const existingUser = await db.user.findUnique({ where: { email } });

  if (!existingUser) {
    return apiResponse(404, { message: "User not found" });
  }

  const isValidPass = await compare(rawPassword, existingUser.password);

  if (!isValidPass) {
    return apiResponse(401, { message: "Invalid credentials" });
  }

  if (!existingUser.isVerified) {
    return apiResponse(401, {
      message: "Email and Phone is not verified!!",
      data: { verificationError: true, id: existingUser.id }, //used in frontend
    });
  }

  const response = apiResponse(200, {
    message: "Success",
    data: displayUser(existingUser),
  });

  //create token
  const token = await generateAccessToken({
    id: existingUser.id,
    email: existingUser.email,
  });

  //send cookie
  response.cookies.set(COOKIE_NAME, token, COOKIE_OPTIONS);

  return response;
}
