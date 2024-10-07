import axios from "@/lib/axios";
import { Category, Subcategory } from "@prisma/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainCategoryTab from "./maincategory-tab";
import SubCategoryTab from "./subcategory-tab";

export default async function CategoryPage() {
  const categoryPromise = axios<Category[]>({
    method: "get",
    endpoint: "/categories",
  });
  const subCategoryPromise = axios<Subcategory[]>({
    method: "get",
    endpoint: "/subcategories",
  });
  const [categoryResponse, subCategoryResponse] = await Promise.all([
    categoryPromise,
    subCategoryPromise,
  ]);

  const categories = categoryResponse.data?.data || [];
  const subCategories = subCategoryResponse.data?.data || [];

  return (
    <div className="h-full">
      <Tabs defaultValue="category" className="p-4 h-screen">
        <TabsList className="mb-4 flex w-full justify-center">
          <TabsTrigger value="category">Main Category</TabsTrigger>
          <TabsTrigger value="subcategory">Sub Category</TabsTrigger>
        </TabsList>
        <TabsContent value="category">
          <MainCategoryTab categories={categories} />
        </TabsContent>
        <TabsContent value="subcategory">
          <SubCategoryTab
            categories={categories}
            subCategories={subCategories}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
