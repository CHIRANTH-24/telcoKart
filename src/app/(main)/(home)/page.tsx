import MainCategory from "./_components/main-category";
import CategorySlider from "./_components/category-slider";
import BusinessCertifications from "./_components/business-certification";
import Suggestions from "./_components/suggestions";
import WhatsappApi from "./_components/whatsapp-api";
import Banner from "./_components/banner";

const images = [
  "/images/banner.jpg",
  "/images/caro2.webp",
  "/images/slider.png",
  "/images/cctv.jpg",
];

export default async function HomePage() {
  return (
    <div className="space-y-6">
      <MainCategory />
      <Banner images={images} />
      <CategorySlider categoryName="electronics" />
      <Suggestions />
      <CategorySlider categoryName="mobility" />
      <BusinessCertifications />
      <Banner images={images} />
      <WhatsappApi />
      <CategorySlider categoryName="mobility" />
    </div>
  );
}
