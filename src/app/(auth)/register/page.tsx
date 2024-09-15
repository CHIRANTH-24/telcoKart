import { Metadata } from "next";
import RegisterForm from "./register-form";

export const metadata: Metadata = {
  title: "Register",
  description: "Registration page",
};

export default async function RegisterPage() {
  return (
    <div className="h-screen lg:grid place-items-center w-full lg:overflow-auto p-4">
      <RegisterForm />
    </div>
  );
}
