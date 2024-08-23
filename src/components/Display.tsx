import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export function Display() {
  return (
    <AspectRatio ratio={16 / 9} className="">
      <Image
        src="/images/airpod.png"
        alt="Photo by Drew Beamer"
        fill
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
  );
}
