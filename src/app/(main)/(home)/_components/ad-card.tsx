import Image from "next/image";
import { cn } from "@/lib/utils";

type AdCard = {
  className?: string;
};

export default function AdCard({ className }: AdCard) {
  return (
    <Image
      src="/images/airIndia.png"
      alt="Advertisement"
      height={300}
      width={300}
      className={cn("w-full rounded-md object-fill" , className)}
    />
  );
}
