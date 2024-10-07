"use client"

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItemProps = {
  label: string;
  href: string;
  className?: string;
  Icon?: LucideIcon
};

export default function NavItem({
  label,
  href,
  className,
  Icon,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn("flex justify-center items-center gap-2 hover:text-primary hover:underline", className)}
    >
      {Icon && <Icon size={"1.1rem"} />}
      <span>{label}</span>
    </Link>
  );
}
