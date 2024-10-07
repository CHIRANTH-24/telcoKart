import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { apiResponse } from "@/util/api-response";
import { COOKIE_NAME, verifyToken } from "@/util/auth";
import { SubCategorySchema } from "@/lib/zod";

/** Add a sub category  */
export async function POST(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;

  if (!token) {
    return apiResponse(401, { message: "Session expired!" });
  }

  try {
    await verifyToken(token!);
    const body = await req.json();
    const parsed = SubCategorySchema.safeParse(body);
    if (parsed.error) {
      return apiResponse(400, { message: parsed.error.errors[0].message });
    }

    const existing = await db.subcategory.findUnique({
      where: { name: parsed.data.name },
    });
    if (existing) {
      return apiResponse(400, { message: "Subcategory already exists!" });
    }
    const { name, description, actions, categoryId , image } = parsed.data;
    const category = await db.subcategory.create({
      data: {
        categoryId,
        name: name.toLowerCase(),
        description,
        actions,
        image
      },
    });
    return apiResponse(201, {
      message: "Subcategory added successfully!",
      data: category,
    });
  } catch (error) {
    console.log(error);
    return apiResponse(500, { message: "Failed to add Subcategory!" });
  }
}

/** Fetches all sub categories */
export async function GET(req: NextRequest) {
  try {
    const subcategories = await db.subcategory.findMany();
    return apiResponse(200, {
      message: "Subcategories fetched successfully!",
      data: subcategories,
    });
  } catch (error) {
    return apiResponse(500, { message: "Something went wrong!" });
  }
}
