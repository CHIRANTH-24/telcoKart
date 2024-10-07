"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { ArrowRight, Edit, Link2, Plus, Trash } from "lucide-react";
import { useMutation } from "react-query";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SubCategorySchema } from "@/lib/zod";
import { Category, Subcategory } from "@prisma/client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
  TableFooter,
} from "@/components/ui/table";
import { CATEGORY_ACTIONS } from "@/util/constants";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import PreviewUploadedImage from "@/components/globals/preview-uploaded-image";
import { UploadButton } from "@/util/uploadthing";

type SubCategoryFormProps = {
  categories: Category[];
  subCategories: Subcategory[];
};

export default function SubCategoryTab({
  categories,
  subCategories: AllSubCategories,
}: SubCategoryFormProps) {
  const router = useRouter();

  const form = useForm<SubCategorySchema>({
    resolver: zodResolver(SubCategorySchema),
    defaultValues: {
      name: "",
      description: "",
      categoryId: "",
      actions: [],
    },
  });

  //to manage actions
  const [actions, setActions] = useState<{ label: string; href: string }[]>([]);
  const [actionError, setActionError] = useState("");

  const [subCategories, setSubCategories] = useState<Subcategory[]>(
    AllSubCategories || []
  );
  //update subcategory
  const [updateSubCategoryId, setUpdateSubCategoryId] = useState("");

  //to search the table
  const [searchQuery, setSearchQuery] = useState("");

  //get uploaded image
  const [image, setImage] = useState("");

  const handleActions = (checked: boolean, label: string) => {
    if (checked) {
      setActions((prev) => {
        const updated = [...prev, { label, href: "" }];
        form.setValue("actions", updated);
        return updated;
      });
    } else {
      setActions((prev) => {
        const updated = prev.filter((a) => a.label !== label);
        form.setValue("actions", updated);
        return updated;
      });
    }
    setActionError("");
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: async (values: SubCategorySchema) => {
      const actions = form.getValues("actions");
      if (actions.length === 0 || !actions[0].href) {
        setActionError("Atleast one action is required");
        return;
      }

      const { data } = await axios<Subcategory>({
        method: updateSubCategoryId ? "put" : "post",
        endpoint: updateSubCategoryId
          ? `/subcategories/${updateSubCategoryId}`
          : "/subcategories",
        body: values,
        showErrorToast: true,
      });

      if (data) {
        updateSubCategoryId
          ? setSubCategories((prev) =>
              prev.map((c) =>
                c.id === updateSubCategoryId ? { ...c, ...data.data } : c
              )
            )
          : setSubCategories((prev) => [...prev, data.data!]);
        toast.success(data.message);
        setUpdateSubCategoryId("");
        form.reset();
        setActions([]);
      }
    },
  });

  const deleteMuatation = useMutation(async (subcategoryId: string) => {
    const { data } = await axios({
      method: "delete",
      endpoint: `/subcategories/${subcategoryId}`,
      showErrorToast: true,
    });
    if (data) {
      setSubCategories((prev) => prev.filter((c) => c.id !== subcategoryId));
      toast.success(data.message);
    }
  });

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((v) => mutate(v))}
            className="space-y-6 bg-background-secondary rounded-xl shadow-lg p-5 w-full md:w-[450px] border border-gray-400 mx-auto"
          >
            <h2 className="text-2xl font-semibold text-center text-primary">
              Add New Subcategory
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
                        placeholder="Subcategory Name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => {
                  const categoryName = categories.find(
                    (c) => c.id === form.getValues("categoryId")
                  )?.name;
                  return (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={
                            updateSubCategoryId ? categoryName : field.value
                          }
                        >
                          <SelectTrigger className="capitalize">
                            <SelectValue
                              placeholder={
                                updateSubCategoryId
                                  ? categoryName
                                  : "Select Category"
                              }
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem
                                key={category.id}
                                value={category.id}
                                className="capitalize"
                              >
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        value={field.value || ""}
                        placeholder="Subcategory Description (optional)"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Dynamic Actions */}
            <>
              <h4>Actions</h4>
              <div className="flex flex-wrap justify-start gap-2">
                {CATEGORY_ACTIONS.map((action, i) => (
                  <div
                    key={i}
                    className="my-1 capitalize flex items-center gap-2"
                  >
                    <Checkbox
                      key={i}
                      id={action.label}
                      checked={actions.some((a) => a.label === action.label)}
                      onCheckedChange={(e) =>
                        handleActions(!!e.valueOf(), action.label)
                      }
                    />
                    <label
                      htmlFor={action.label}
                      className="capitalize flex items-center gap-1 text-sm"
                    >
                      <action.Icon size={"1.1rem"} />
                      {action.label}
                    </label>
                  </div>
                ))}
              </div>
              {actions.map((action, i) => (
                <div key={i} className="my-2">
                  <FormField
                    control={form.control}
                    name={`actions.${i}.label`}
                    defaultValue={action.label}
                    render={() => (
                      <FormItem>
                        <FormLabel className="capitalize">
                          {action.label}
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`actions.${i}.href`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="url"
                            {...field}
                            value={field.value || ""}
                            placeholder="Enter URL"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
              {actionError && (
                <p className="text-sm text-red-500">{actionError}</p>
              )}
            </>
            <div>
              <FormLabel className="text-muted-foreground">
                Upload sub-category thumbnail
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
      <div className="flex-1 overflow-y-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
          <h3 className="text-2xl font-semibold text-primary">
            All Subcategories
          </h3>
          <Input
            type="search"
            placeholder="Search by name, description"
            value={searchQuery}
            onChange={(e) => {
              const query = e.target.value;
              setSearchQuery(query);
              setSubCategories((prev) =>
                query
                  ? prev.filter(
                      (c) =>
                        c.name.includes(query) || c.description?.includes(query)
                    )
                  : AllSubCategories
              );
            }}
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow className="[&_th]:text-center">
              <TableHead>Subcategory Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Thumbnail</TableHead>
              <TableHead>Category Actions</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subCategories.length === 0 ? (
              <TableCell
                colSpan={6}
                className="text-center text-muted-foreground text-sm"
              >
                No Data
              </TableCell>
            ) : (
              subCategories.map((subcategory, index) => (
                <TableRow key={index} className="capitalize text-center">
                  <TableCell className="font-medium">
                    {subcategory.name}
                  </TableCell>
                  <TableCell>
                    {categories.find((c) => c.id === subcategory.categoryId)
                      ?.name || "Unknown"}
                  </TableCell>
                  <TableCell>{subcategory.description || "-"}</TableCell>
                  <TableCell>
                    {subcategory.image ? (
                      <Link
                        target="_blank"
                        href={subcategory.image || ""}
                        className="flex justify-center"
                      >
                        <Link2 size={"1.1rem"} />
                      </Link>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1.5 items-center justify-center">
                      {(
                        subcategory.actions as [{ label: string; href: string }]
                      ).map((action, i) => (
                        <Link
                          key={i}
                          href={action.href}
                          target="_blank"
                          className="underline text-primary text-sm"
                        >
                          {action.label}
                        </Link>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="flex items-center gap-8">
                    <Edit
                      size={"1.1rem"}
                      color="green"
                      role="button"
                      onClick={() => {
                        setUpdateSubCategoryId(subcategory.id);
                        form.setValue("name", subcategory.name);
                        form.setValue(
                          "description",
                          subcategory?.description || ""
                        );
                        form.setValue("categoryId", subcategory.categoryId);
                        const actions = subcategory.actions as [
                          { label: string; href: string }
                        ];
                        form.setValue("actions", actions);
                        setActions(actions);
                      }}
                    />
                    <Trash
                      size={"1.1rem"}
                      color="red"
                      role="button"
                      onClick={() => {
                        confirm("Are you sure want to delete this subcategory?") &&
                          deleteMuatation.mutate(subcategory.id);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
          {subCategories.length > 0 && (
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>
                  Total Subcategories: {subCategories.length}
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </div>
    </div>
  );
}
