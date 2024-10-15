import { db } from "@/lib/db";
import { apiResponse } from "@/util/api-response";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { name: string } }
) {
  try {
    const categoryName = params.name;
    const category = await db.category.findUnique({
      where: { name: categoryName },
      include: { subCategories: true },
    });
    if (!category) throw new Error("category not found");
    return apiResponse(200, {
      message: "Category data fetched successfully!",
      data: category,
    });
  } catch (error: any) {
    return apiResponse(500, {
      message: error.message || "Something went wrong",
    });
  }
}
