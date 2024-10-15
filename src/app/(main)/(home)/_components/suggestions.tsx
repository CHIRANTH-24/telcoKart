import Image from "next/image";
import SuggestionGallery from "./suggestion-gallery";

const topSelectionImages = Array(4).fill("/images/earpode.jpg");
const topDealsImages = Array(4).fill("/images/camera.png");

export default function Suggestions() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <SuggestionGallery title="Popular Satellite Services" images={topSelectionImages} />
      <SuggestionGallery title="Top deals for you" images={topDealsImages} />
      {/* Advertisement */}
      <div className="flex justify-center items-center">
        <Image
          src={"/images/airIndia.png"}
          alt="image"
          width={400}
          height={400}
          className="h-[450px] rounded-sm object-cover mt-5"
        />
      </div>
    </section>
  );
}
