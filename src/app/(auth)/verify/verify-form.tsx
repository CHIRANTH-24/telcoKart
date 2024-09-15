"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutation } from "react-query";
import { ArrowLeft, ArrowRight } from "lucide-react";

import axios from "@/lib/axios";
import { VerifySchema } from "@/lib/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

type VerifyOTPFormProps = {
  userId: string;
};

export default function VerifyOTPForm({ userId }: VerifyOTPFormProps) {
  const router = useRouter();
  const form = useForm<VerifySchema>({
    resolver: zodResolver(VerifySchema),
    defaultValues: {
      userId,
      emailOTP: "",
      phoneOTP: "",
    },
  });

  const { isLoading, mutate } = useMutation(async (values: VerifySchema) => {
    const { data } = await axios({
      method: "post",
      endpoint: "/auth/otp/verify",
      body: values,
      showErrorToast: true,
    });
    if (data?.data) {
      toast.success(data.message);
      router.replace("/");
    }
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((v) => mutate(v))}
        className="space-y-6 bg-background-secondary rounded-xl shadow-sm p-5 w-full md:w-[400px] border border-gray-600 mx-auto grid place-items-center"
      >
        <FormField
          control={form.control}
          name="emailOTP"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email OTP</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="space-x-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <InputOTPSlot
                        key={i}
                        index={i}
                        className="border border-gray-600"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneOTP"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone OTP</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="space-x-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <InputOTPSlot
                        key={i}
                        index={i}
                        className="border border-gray-600"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-6">
          <Button
            type="button"
            size={"sm"}
            variant={"secondary"}
            className="flex items-center gap-1"
            onClick={() => router.push("/")}
          >
            <ArrowLeft size="1.1rem" /> cancel
          </Button>
          <Button
            size={"sm"}
            isLoading={isLoading}
            className="flex items-center justify-center gap-1"
          >
            Submit <ArrowRight size="1.1rem" />
          </Button>
        </div>
      </form>
    </Form>
  );
}
