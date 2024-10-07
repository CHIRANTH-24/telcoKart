import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Telcokart | Login",
  description: "Login page of telcokart",
};

const LoginForm = dynamic(() => import("./login-form"), { ssr: false });

export default async function LoginPage() {
  return (
    <div className="h-screen grid place-items-center w-full overflow-auto p-4">
      <LoginForm />
    </div>
  );
}
