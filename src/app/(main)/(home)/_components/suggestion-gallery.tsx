import Image from "next/image";
import Link from "next/link";

type SuggestionGalleryProps = {
  title?: string;
  images?: string[];
};

export default function SuggestionGallery({
  title,
  images,
}: SuggestionGalleryProps) {
  return (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold">{title}</h4>
      <div className="grid grid-cols-2 gap-4 place-items-center">
        {images?.map((img, i) => (
          <Link
            key={i}
            href="/"
            className="flex justify-center w-[200px] h-[200px] border border-gray-300 rounded-md overflow-hidden"
          >
            <Image
              key={i}
              src={img}
              alt="image"
              width={150}
              height={150}
              className="object-contain hover:scale-105 transition-all duration-200 ease-in-out"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
