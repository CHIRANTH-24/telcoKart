import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { SubCategorySchema } from "@/lib/zod";
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
    const subcategoryId = params.id;
    const { name, description, actions, image } =
      (await req.json()) as SubCategorySchema;

    const updated = await db.subcategory.update({
      where: { id: subcategoryId },
      data: {
        name,
        description,
        actions,
        image,
      },
    });
    return apiResponse(200, {
      message: "Subcategory updated successfully!",
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
    const subcategoryId = params.id;

    await db.subcategory.delete({
      where: { id: subcategoryId },
    });

    return apiResponse(200, {
      message: "Subcategory deleted successfully!",
    });
  } catch (error: any) {
    return apiResponse(500, { message: "Something went wrong!" });
  }
}
