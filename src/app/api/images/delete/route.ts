import { NextRequest } from "next/server";
import { UTApi } from "uploadthing/server";
import { apiResponse } from "@/util/api-response";
import { COOKIE_NAME, verifyToken } from "@/util/auth";

export async function POST(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    return apiResponse(401, { message: "Session expired!" });
  }
  try {
    await verifyToken(token);
    
    const { keys } = (await req.json()) as { keys: string[] };

    const utapi = new UTApi({ token: process.env.UPLOADTHING_TOKEN! });

    const res = await utapi.deleteFiles(keys);

    if (!res.success) throw new Error("Failed to delete images");

    return apiResponse(200, {
      message: `${res.deletedCount} images removed!!`,
    });
  } catch (error) {
    console.log("image delete error: " , error);
    
    return apiResponse(500, { message: "Something went wrong!" });
  }
}
