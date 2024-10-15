"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";

type SearchbarProps = {
  className?: string;
};

export default function Searchbar({ className }: SearchbarProps) {
  return (
    <div className={"flex items-center relative"}>
      <Search color="black" className="absolute z-10 left-2" />
      <Input className={cn("w-[500px] pl-10" , className)} placeholder="search here.." />
    </div>
  );
}
