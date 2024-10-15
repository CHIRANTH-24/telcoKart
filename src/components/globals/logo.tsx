import Image from "next/image";
import { cn } from "@/lib/utils";
import { PropsWithClassName } from "@/types";

export default function Logo({ className }: PropsWithClassName) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/images/logo.png"
        alt="logo"
        height={50}
        width={200}
        className={"h-8 w-8"}
      />
      <h1 className="text-3xl font-serif">elcokart</h1>
    </div>
  );
}
