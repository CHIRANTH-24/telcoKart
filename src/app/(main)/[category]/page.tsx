import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Category, Subcategory } from "@prisma/client";
import axios from "@/lib/axios";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = params.category;
  const { data, error } = await axios<
    Category & { subCategories: Subcategory[] }
  >({
    method: "get",
    endpoint: `/categories/name/${categoryName}`,
  });

  if (!categoryName || error || !data) {
    return notFound();
  }

  const category = data.data;

  return (
    <div className="w-full h-screen overflow-y-auto p-3 md:p-6">
      <div className="flex flex-col justify-center items-center gap-1 capitalize">
        <h1 className="text-2xl font-bold">Best of {category?.name}</h1>
        <p className="text-sm text-muted-foreground">
          {category?.subCategories?.length} items
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
        {category?.subCategories && category?.subCategories.length > 0 ? (
          category?.subCategories?.map((subcategory) => (
            <Link
              href={`/${category.name}/${subcategory.name}`}
              key={subcategory.id}
              className="grid place-items-center rounded-md p-4 pb-2 space-y-2"
            >
              <Image
                src={subcategory.image || ""}
                alt={subcategory.name}
                width={200}
                height={200}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <p className="capitalize font-medium">{subcategory.name}</p>
              <p className="text-sm text-muted-foreground">
                {subcategory.description}
              </p>
            </Link>
          ))
        ) : (
          <p className="text-center my-5 text-muted-foreground">
            No SubCategories
          </p>
        )}
      </div>
    </div>
  );
}
