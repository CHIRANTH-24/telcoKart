"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { ChevronRight } from "lucide-react";
import axios from "@/lib/axios";
import { cn } from "@/lib/utils";
import { DisplayCategory } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import AdCard from "./ad-card";

type CategorySlider = {
  categoryName?: string;
};

export default function CategorySlider({ categoryName }: CategorySlider) {
  const name = useMemo(() => categoryName, [categoryName]);
  const { isFetching, data: category } = useQuery({
    queryKey: [name],
    queryFn: async () => {
      const { data } = await axios<DisplayCategory>({
        method: "get",
        endpoint: `/categories/name/${name}`,
      });
      if (data) {
        return data.data;
      }
      return null;
    },
    enabled: !!name,
  });

  if (isFetching) {
    return <CategorySliderSkeleton />;
  }
  if (!name || !category) return null;
  return (
    <section className="w-full flex gap-2">
      <div className="w-[85%] space-y-4">
        <div className=" flex justify-between items-center gap-2">
          <h2 className="text-2xl font-bold mb-4">
            Best of <span className="capitalize">{category.name}</span>
          </h2>
          <Link href={`/${category.name.toLowerCase()}`}>
            <button className="rounded-full text-white bg-primary p-2">
              <ChevronRight size={"1.1rem"} />
            </button>
          </Link>
        </div>
        <Carousel className="w-full mx-auto grid place-items-center relative overflow-hidden">
          <CarouselContent>
            {category.subCategories &&
              category.subCategories.map((subCategory, i) => (
                <CarouselItem
                  key={i}
                  className={cn(
                    "flex justify-center",
                    category.subCategories.length <= 4
                      ? `justify-between basis-1/${category.subCategories.length}`
                      : `basis-1/4`
                  )}
                >
                  <Link
                    href={`/${category.name.toLowerCase()}/${subCategory.name.toLowerCase()}`}
                    className=" flex flex-col items-center gap-1"
                  >
                    <div className="w-[200px] h-[200px]">
                      <Image
                        src={subCategory.image || "/images/camera.jpg"}
                        alt={subCategory.name}
                        height={200}
                        width={200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="capitalize text-muted-foreground text-sm">
                      {subCategory.name}
                    </span>
                  </Link>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="z-30 bg-white text-black absolute left-5" />
          <CarouselNext className="z-30 bg-white text-black absolute right-5" />
        </Carousel>
      </div>
      <div className="w-[15%]">
        <AdCard className="h-72" />
      </div>
    </section>
  );
}

export function CategorySliderSkeleton() {
  return (
    <section className="w-full flex gap-2 h-72 bg-gray-200">
      <div className="w-[85%] space-y-4">
        <div className="flex justify-between items-center gap-2">
          <h2 className="text-2xl font-bold mb-4">
            <Skeleton className="w-[300px] h-8 rounded-lg bg-gray-400" />
          </h2>
          <Skeleton className="w-10 h-10 rounded-full bg-gray-400" />
        </div>

        <div className="w-full mx-auto grid place-items-center relative overflow-hidden">
          <div className="flex gap-4 justify-center">
            {[...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                className="w-[200px] h-[200px] rounded-md bg-gray-400"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-[15%]">
        <Skeleton className="h-full w-full bg-gray-400" />
      </div>
    </section>
  );
}
