import { redirect } from "next/navigation";
import VerifyOTPForm from "./verify-form";
import { Metadata } from "next";

type VerifyPageProps = {
  searchParams: {
    userId: string;
  };
};

export const metadata: Metadata = {
  title: "Verify",
  description: "Verify page",
};

export default async function VerifyPage({ searchParams }: VerifyPageProps) {
  const { userId } = searchParams;
  if (!userId) {
    redirect("/");
  }
  return (
    <div className="h-screen grid place-items-center p-4">
      <VerifyOTPForm userId={userId} />
    </div>
  );
}
