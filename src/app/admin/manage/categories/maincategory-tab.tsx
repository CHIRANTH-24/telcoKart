"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link2 } from "lucide-react";
import { useMutation } from "react-query";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { CategorySchema } from "@/lib/zod";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
  TableFooter,
} from "@/components/ui/table";
import { Edit, Trash } from "lucide-react";
import { Category } from "@prisma/client";
import { UploadButton } from "@/util/uploadthing";
import PreviewUploadedImage from "@/components/globals/preview-uploaded-image";

type CategoryFormProps = {
  categories: Category[];
};

export default function MainCategoryTab({
  categories: AllCategories,
}: CategoryFormProps) {
  // Form hook
  const form = useForm<CategorySchema>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: "",
      description: "",
      image: "",
    },
  });

  const [categories, setCategories] = useState(AllCategories || []);
  const [updateCategoryId, setUpdateCategoryId] = useState("");

  //to search the table
  const [searchQuery, setSearchQuery] = useState("");

  //get uploaded image
  const [image, setImage] = useState("");

  const { mutate, isLoading } = useMutation({
    mutationFn: async (values: CategorySchema) => {
      const { data } = await axios<Category>({
        method: updateCategoryId ? "put" : "post",
        endpoint: updateCategoryId
          ? `/categories/${updateCategoryId}`
          : "/categories",
        body: values,
        showErrorToast: true,
      });

      if (data) {
        updateCategoryId
          ? setCategories((prev) =>
              prev.map((category) =>
                category.id === updateCategoryId
                  ? { ...category, ...data.data }
                  : category
              )
            )
          : setCategories((prev) => [...prev, data.data!]);
        toast.success(data.message);
        setUpdateCategoryId("");
        form.reset();
      }
    },
  });

  const deleteMuatation = useMutation(async (categoryId: string) => {
    const { data } = await axios({
      method: "delete",
      endpoint: `/categories/${categoryId}`,
      showErrorToast: true,
    });
    if (data) {
      setCategories((prev) => prev.filter((c) => c.id !== categoryId));
      toast.success(data.message);
    }
  });

  return (
    <div className="w-full flex flex-col md:flex-row gap-6">
      {/* Category Form */}
      <div className="flex-1">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((v) => mutate(v))}
            className="space-y-6 bg-background-secondary rounded-xl p-5 w-full md:w-[400px] border border-gray-400 mx-auto shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-center text-primary">
              Add New Category
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Category Name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Category Description (optional)"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormLabel className="text-muted-foreground">
                Upload category thumbnail
              </FormLabel>
              <UploadButton
                endpoint="singleImageUploader"
                content={{ button: "Upload File" }}
                className="w-full"
                disabled={!!image}
                onClientUploadComplete={(res) => {
                  const url = res[0].url;
                  form.setValue("image", url);
                  setImage(url);
                  toast.success("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                  toast.error(`ERROR! ${error.message}`);
                }}
              />
              {image && (
                <PreviewUploadedImage
                  images={[image]}
                  onDelete={() => setImage("")}
                />
              )}
            </div>
            <div className="flex justify-center items-center gap-6">
              <Button
                size={"sm"}
                isLoading={isLoading}
                className="flex items-center justify-center gap-1"
              >
                Save <ArrowRight size="1.1rem" />
              </Button>
            </div>
          </form>
        </Form>
      </div>

      {/* Categories Table */}
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
          <h3 className="text-2xl font-semibold text-primary">
            All Categories
          </h3>
          <Input
            type="search"
            placeholder="Search by name, description"
            value={searchQuery}
            onChange={(e) => {
              const query = e.target.value;
              setSearchQuery(query);
              setCategories((prev) =>
                query
                  ? prev.filter(
                      (c) =>
                        c.name.includes(query) || c.description?.includes(query)
                    )
                  : AllCategories
              );
            }}
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow className="[&_th]:text-center">
              <TableHead className="w-2/6">Category Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Thumbnail</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.length === 0 ? (
              <TableCell
                colSpan={6}
                className="text-center text-muted-foreground text-sm"
              >
                No Data
              </TableCell>
            ) : (
              categories.map((category, index) => (
                <TableRow key={index} className="capitalize h-10 text-center">
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell>
                    {category.description || "No description"}
                  </TableCell>
                  <TableCell>
                    {category.image ? (
                      <Link
                        target="_blank"
                        href={category.image || ""}
                        className="flex justify-center"
                      >
                        <Link2 size={"1.1rem"} />
                      </Link>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-8">
                      <Edit
                        size={"1.1rem"}
                        color="green"
                        role="button"
                        onClick={() => {
                          setUpdateCategoryId(category.id);
                          form.setValue("name", category.name);
                          form.setValue(
                            "description",
                            category?.description || "-"
                          );
                          form.setValue("image", category?.image || "");
                          setImage(category?.image || "");
                        }}
                      />
                      <Trash
                        size={"1.1rem"}
                        color="red"
                        role="button"
                        onClick={() => {
                          confirm(
                            "Are you sure want to delete this category and its associated subcategories?"
                          ) && deleteMuatation.mutate(category.id);
                        }}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
          {categories.length > 0 && (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2}>
                  Total Categories: {categories.length}
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </div>
    </div>
  );
}
