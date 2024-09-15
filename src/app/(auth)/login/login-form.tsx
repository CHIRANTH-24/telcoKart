"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, KeyRound, Loader, Mail } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginSchema } from "@/lib/zod";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import axios from "@/lib/axios";
import { toast } from "sonner";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<LoginSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const [verificationError, setVerificationError] = useState({ userId: "" });

  const { isLoading, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (values: LoginSchema) => {
      const { data, error } = await axios({
        method: "post",
        endpoint: "/auth/login",
        body: values,
        showErrorToast: true,
      });

      if (data?.data) {
        toast.success(data.message);
        router.replace("/");
      }
      if (error?.data && error.data.verificationError) {
        console.log(error);
        setVerificationError({ userId: error.data.id });
      }
    },
  });

  const verificationMuatation = useMutation(async () => {
    if (verificationError.userId) {
      const { data } = await axios({
        method: "post",
        endpoint: "/auth/otp/generate",
        body: { id: verificationError.userId },
        showErrorToast: true,
      });
      if (data) {
        toast.success(data.message);
        return router.replace(`/verify?userId=${verificationError.userId}`);
      }
    }
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((v) => mutate(v))}
        className="space-y-6 bg-background-secondary rounded-xl shadow-sm p-5 w-full md:w-[400px] border border-gray-600 mx-auto"
      >
        <h2 className="text-2xl font-semibold text-center">
          Login to your account
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email address"
                    icon={Mail}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Password"
                    icon={KeyRound}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="dark:text-muted-foreground text-sm flex items-center gap-6 justify-center">
          <Link href="/register" className="underline hover:text-primary">
            Create An Account
          </Link>
          <Link href="/reset" className="underline hover:text-primary">
            Forgot Password?
          </Link>
        </div>

        <div className="flex justify-center items-center gap-6">
          <Button
            type="button"
            size={"sm"}
            variant={"secondary"}
            className="flex items-center gap-1"
            onClick={() => router.push("/")}
          >
            <ArrowLeft size="1.1rem" /> cancel
          </Button>
          {!verificationError.userId ? (
            <Button
              size={"sm"}
              isLoading={isLoading}
              className="flex items-center justify-center gap-1"
            >
              Submit <ArrowRight size="1.1rem" />
            </Button>
          ) : (
            <Button
              type="button"
              size={"sm"}
              isLoading={verificationMuatation.isLoading}
              onClick={() => verificationMuatation.mutate()}
            >
              Verify Now <ArrowRight size="1.1rem" />
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
