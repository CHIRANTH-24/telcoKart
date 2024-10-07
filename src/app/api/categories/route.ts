import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { apiResponse } from "@/util/api-response";
import { COOKIE_NAME, verifyToken } from "@/util/auth";
import { CategorySchema } from "@/lib/zod";

/** Add a category  */
export async function POST(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;

  if (!token) {
    return apiResponse(401, { message: "Session expired!" });
  }

  const { id } = await verifyToken(token!);

  if (!id) {
    return apiResponse(401, { message: "Session expired!" });
  }

  const body = await req.json();
  const parsed = CategorySchema.safeParse(body);
  if (parsed.error) {
    return apiResponse(400, { message: parsed.error.errors[0].message });
  }

  try {
    const existing = await db.category.findUnique({
      where: { name: parsed.data.name },
    });
    if (existing) {
      return apiResponse(400, { message: "Category already exists!" });
    }
    const { name, description, image } = parsed.data;
    const category = await db.category.create({
      data: {
        name: name.toLowerCase(),
        description,
        image,
      },
    });
    return apiResponse(201, {
      message: "Category added successfully!",
      data: category,
    });
  } catch (error) {
    console.log(error);
    return apiResponse(500, { message: "Failed to add category!" });
  }
}

/** Fetches all categories */
export async function GET(req: NextRequest) {
  try {
    const categories = await db.category.findMany({
      include: { subCategories: true },
    });
    return apiResponse(200, {
      message: "Category fetched successfully!",
      data: categories,
    });
  } catch (error) {
    return apiResponse(500, { message: "Something went wrong!" });
  }
}
