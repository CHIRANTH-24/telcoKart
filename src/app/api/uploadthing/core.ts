import { COOKIE_NAME, verifyToken } from "@/util/auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const uploader = (maxFileCount: number, minFileCount: number) => {
  return (
    f({ image: { maxFileCount, maxFileSize: "4MB", minFileCount } })
      // Set permissions and file types for this FileRoute
      .middleware(async ({ req }) => {
        // This code runs on your server before upload
        const token = req.cookies.get(COOKIE_NAME)?.value;

        if (!token) throw new Error("Token missing");

        const { id } = await verifyToken(token);

        if (!id) throw new UploadThingError("Unauthorized");

        return { userId: id };
      })
      .onUploadComplete(async ({ metadata, file }) => {
        console.log("Upload complete for userId:", metadata.userId);

        console.log("file url", file.url);
        return { uploadedBy: metadata.userId };
      })
  );
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  singleImageUploader: uploader(1, 1),
  multipleImageUploader: uploader(10, 1),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
