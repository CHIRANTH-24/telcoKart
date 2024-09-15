import { NextResponse } from "next/server";

export type ResponseBody<T = any> = {
  message?: string;
  data?: T;
};

export function apiResponse(status: number, body: ResponseBody) {
  return NextResponse.json(body, { status });
}
