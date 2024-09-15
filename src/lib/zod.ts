import { z } from "zod";

export const RegisterSchema = z
  .object({
    firstname: z.string().min(1, "Firstname cannot be empty"),
    lastname: z.string().min(1, "Lastname cannot be empty"),
    company: z.string().min(1, "Company Name cannot be empty"),
    designation: z.string().min(1, "Designation cannot be empty"),
    email: z.string().min(1, "Business email address cannot be empty"),
    phone: z.string().length(10, "Invalid phone number"),
    password: z.string().min(5, "Password must be at least 5 characters long"),
    retypePassword: z.string(),
  })
  .refine((data) => data.password === data.retypePassword, {
    message: "Passwords do not match",
    path: ["retypePassword"], // This will associate the error with the retypePassword field
  });

export const LoginSchema = z.object({
  email: z.string().min(1, "Email address cannot be empty"),
  password: z.string().min(1, "Password cannot be empty"),
  // phone: z.string().length(10, "Invalid phone number").optional(),
});

export const VerifySchema = z.object({
  userId: z.string(),
  emailOTP: z.string().length(6, "Invalid OTP"),
  phoneOTP: z.string().length(6, "Invalid OTP"),
});

export type RegisterSchema = z.infer<typeof RegisterSchema>;
export type LoginSchema = z.infer<typeof LoginSchema>;
export type VerifySchema = z.infer<typeof VerifySchema>;
