import Image from "next/image";
import Link from "next/link";
import { Category, Subcategory } from "@prisma/client";
import { ChevronDown, CircleDashed } from "lucide-react";
import axios from "@/lib/axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CATEGORY_ACTIONS } from "@/util/constants";

type CategoriesWithSubCategories = ({
  subCategories: Subcategory[];
} & Category)[];

export default async function MainCategory() {
  const { data } = await axios<CategoriesWithSubCategories>({
    method: "get",
    endpoint: "/categories",
  });

  const categories = data?.data || [];

  return (
    <section className="w-full my-4 py-2 bg-white shadow-sm  flex gap-4 items-center justify-around overflow-x-auto">
      {categories.slice(0, 8).map((category, i) => (
        <DropdownMenu key={i}>
          <div className="flex flex-col items-center gap-1 focus:outline-none">
            <Link href={`/${category.name}`}>
              <Image
                src={category.image || "/images/electronics1.png"}
                alt={category.name}
                width={100}
                height={100}
                className="h-16 w-16 object-cover"
              />
            </Link>
            <DropdownMenuTrigger>
              <p className="flex items-center gap-1 capitalize">
                {category.name} <ChevronDown size={"1.1rem"} />
              </p>
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent>
            {category.subCategories &&
              category.subCategories.map((subcategory, i) => (
                <DropdownMenuSub key={i}>
                  <DropdownMenuSubTrigger className="capitalize">
                    {subcategory.name}
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    {(
                      subcategory.actions as [{ label: string; href: string }]
                    ).map((action, i) => {
                      const Icon =
                        CATEGORY_ACTIONS.find((c) => c.label === action.label)
                          ?.Icon || CircleDashed;
                      return (
                        <DropdownMenuItem key={i}>
                          <Link
                            href={action.href}
                            target="_blank"
                            className={
                              "flex justify-center items-center gap-2 hover:text-primary hover:underlin e capitalize"
                            }
                          >
                            {Icon && <Icon size={"1.1rem"} />}
                            <span>{action.label}</span>
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </section>
  );
}
