import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { CategorySchema } from "@/lib/zod";
import { apiResponse } from "@/util/api-response";
import { COOKIE_NAME, verifyToken } from "@/util/auth";

/** Updates the category */
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    return apiResponse(401, { message: "Session expired!" });
  }
  try {
    await verifyToken(token);
    const categoryId = params.id;
    const { name, description, image } = (await req.json()) as CategorySchema;

    const updated = await db.category.update({
      where: { id: categoryId },
      data: {
        name,
        description,
        image,
      },
    });
    return apiResponse(200, {
      message: "Category updated successfully!",
      data: updated,
    });
  } catch (error) {
    return apiResponse(500, { message: "Something went wrong!" });
  }
}

/** Deletes the category */
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) {
    return apiResponse(401, { message: "Session expired!" });
  }
  try {
    await verifyToken(token);
    const categoryId = params.id;

    await db.category.delete({
      where: { id: categoryId },
    });

    return apiResponse(200, {
      message: "Category deleted successfully!",
    });
  } catch (error) {
    return apiResponse(500, { message: "Something went wrong!" });
  }
}

/** Fetches all subcategories of category by its ID */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const categoryId = params.id;
  try {
    const subcategories = await db.subcategory.findMany({
      where: { categoryId },
    });
    return apiResponse(200, {
      message: "Subcategories fetched successfully!",
      data: subcategories,
    });
  } catch (error) {
    return apiResponse(500, { message: "Something went wrong!" });
  }
}
