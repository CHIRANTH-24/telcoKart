import { db } from "@/lib/db";
import { apiResponse } from "@/util/api-response";
import { COOKIE_NAME, verifyToken } from "@/util/auth";
import { Banner } from "@prisma/client";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    return apiResponse(401, { message: "Session expired!" });
  }
  try {
    await verifyToken(token);
    const { image, priority } = (await req.json()) as Banner;

    const banner = await db.banner.create({
      data: {
        image,
        priority,
      },
    });
    return apiResponse(200, {
      message: "Banner image added successfully!",
      data: banner,
    });
  } catch (error) {
    return apiResponse(500, { message: "Something went wrong!" });
  }
}
