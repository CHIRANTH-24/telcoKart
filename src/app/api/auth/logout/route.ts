import { NextRequest } from "next/server";
import { apiResponse } from "@/util/api-response";
import { COOKIE_NAME, COOKIE_OPTIONS } from "@/util/auth";

export async function POST(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  const response = apiResponse(200, { message: "Logged Out!!" });
  if (token) {
    response.cookies.set(COOKIE_NAME, "", {
      ...COOKIE_OPTIONS,
      maxAge: -1,
      expires: new Date(0),
    });
  }
  return response;
}
