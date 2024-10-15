"use client";

import Image from "next/image";
import { useState } from "react";
import { Loader, Trash } from "lucide-react";
import { toast } from "sonner";

import axios from "@/lib/axios";
import { cn } from "@/lib/utils";
import { useMutation } from "react-query";

type PreviewUploadedImageProps = {
  images?: string[];
  className?: string;
  onDelete?: () => void;
};

export default function PreviewUploadedImage({
  images: AllImages = [],
  className,
  onDelete,
}: PreviewUploadedImageProps) {
  const [images, setImages] = useState<string[]>(AllImages);

  //   Delete image in server
  const deleteMutation = useMutation(async (url: string) => {
    //extract key from the image url
    const splitArr = url.split("/");
    const key = splitArr[splitArr.length - 1];

    const axiosPromise = axios({
      method: "post",
      endpoint: "/images/delete",
      body: { keys: [key] },
    });
    toast.promise(axiosPromise, {
      loading: "Please wait a moment....",
      success: (data) => {
        if (data) {
          setImages((prev) => prev.filter((i) => i !== url));
          onDelete && onDelete();
          return data.data?.message;
        }
      },
    });
  });

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {images.map((img, i) => (
        <div key={i} className={cn("relative w-48 h-48", className)}>
          <Image
            key={i}
            src={img}
            alt={i.toString()}
            width={200}
            height={200}
            className="w-full h-full object-contain"
          />
          <button
            type="button"
            disabled={deleteMutation.isLoading}
            onClick={() => deleteMutation.mutate(img)}
            className="absolute top-3 right-3"
          >
            {deleteMutation.isLoading ? (
              <Loader size={"1rem"} className="animate-spin" />
            ) : (
              <Trash size={"1rem"} color="red" />
            )}
          </button>
        </div>
      ))}
    </div>
  );
}
