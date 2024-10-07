import { NextRequest } from "next/server";
import { apiResponse } from "@/util/api-response";
import { COOKIE_NAME, verifyToken } from "@/util/auth";
import { displayUser, getUser } from "@/util/user";
import { TokenExpiredError } from "jsonwebtoken";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get(COOKIE_NAME)?.value;

    if (!token) {
      return apiResponse(401, { message: "Session expired!!" });
    }

    const payload = await verifyToken(token);

    const user = await getUser({ id: payload.id });

    if (!user) {
      return apiResponse(401, { message: "Session expired!!" });
    }

    return apiResponse(200, {
      message: "Authenticated!!",
      data: displayUser(user),
    });
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return apiResponse(401, { message: "Session expired" });
    }
  }
}
