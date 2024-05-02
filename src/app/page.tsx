import Carousel from "@/components/native/Carousel";
import Hero from "@/components/pages/hero";
export default function HomePage() {
  const images = ["/1.png", "/2.jpg", "/3.jpeg"];
  return (
    <main>
      <div className=" absolute -z-50 h-screen w-screen opacity-50">
        <Carousel images={images} />
      </div>
      <Hero />
      {/* <FeatureCards /> */}
      {/* <Features /> */}
    </main>
  );
}
