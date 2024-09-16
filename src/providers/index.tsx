"use client";

import { Fragment, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";
import AuthProvider from "@/providers/auth-provider";

export default function AppProvider({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
      <Toaster richColors closeButton position="bottom-right" />
    </Fragment>
  );
}
