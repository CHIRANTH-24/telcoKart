"use server";

import { UTApi } from "uploadthing/server";

const utapi = new UTApi({ token: process.env.UPLOADTHING_TOKEN });

export async function upload(formData: FormData) {
  const files = formData.getAll("files") as File[];
  const responses = await utapi.uploadFiles(files);
  const res: string[] = [];
  for (let i = 0; i < responses.length; i++) {
    const response = responses[i];
    if (response.data) {
      res.push(response.data.url);
    }
  }
  return res;
}
