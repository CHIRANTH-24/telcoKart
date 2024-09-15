"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ArrowLeft,
  ArrowRight,
  BookUser,
  Building,
  CircleUser,
  KeyRound,
  Loader,
  Mail,
  Phone,
} from "lucide-react";

import { RegisterSchema } from "@/lib/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import axios from "@/lib/axios";
import { toast } from "sonner";

export default function RegisterForm() {
  const router = useRouter();
  const form = useForm<RegisterSchema>({
    defaultValues: {
      firstname: "",
      company: "",
      designation: "",
      email: "",
      password: "",
      phone: "",
      retypePassword: "",
    },
    resolver: zodResolver(RegisterSchema),
  });

  const { isLoading, mutate } = useMutation(async (values: RegisterSchema) => {
    const { data } = await axios({
      method: "post",
      endpoint: "/auth/register",
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
        className="space-y-6 bg-background-secondary border border-gray-700 rounded-xl shadow-sm p-5 h-fit w-full lg:w-1/2"
      >
        <h2 className="text-2xl font-semibold text-center">
          Create An Account
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Full name" icon={CircleUser} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Last name" icon={CircleUser} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Company name"
                    icon={Building}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="designation"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Designation" icon={BookUser} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Business email address"
                    icon={Mail}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    placeholder="Phone number"
                    icon={Phone}
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
                    placeholder="New Password"
                    icon={KeyRound}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="retypePassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Re-Type Password"
                    icon={KeyRound}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <p className="dark:text-muted-foreground text-sm text-center">
          Already have an account?{" - "}
          <Link href={"/login"} className="underline hover:text-primary">
            Log In
          </Link>
        </p>

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
