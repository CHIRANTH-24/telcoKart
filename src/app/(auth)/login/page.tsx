import { Metadata } from "next";
import LoginForm from "./login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

export default async function LoginPage() {
  return (
    <div className="h-screen grid place-items-center w-full overflow-auto p-4">
      <LoginForm />
    </div>
  );
}
