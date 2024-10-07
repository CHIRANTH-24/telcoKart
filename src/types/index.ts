import { Category, Subcategory } from "@prisma/client";

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  company: string;
  Designation: string;
  email: string;
  isVerified: boolean;
};

export type PropsWithClassName = {
  className?: string;
};

export type DisplayCategory = Category & {
  subCategories: Subcategory[];
};
