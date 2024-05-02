import Carousel from "@/components/native/Carousel";
import FeatureCards from "@/components/pages/feature-cards";
import Features from "@/components/pages/features";
import Hero from "@/components/pages/hero";
export default function HomePage() {

  let images= ["/1.png", "/2.jpg", "/3.jpeg"]
  return (
    <main>
     
      <div className=" absolute w-screen h-screen opacity-50 -z-50">
      <Carousel images={images}/>
      </div>
      <Hero />
      {/* <FeatureCards /> */}
      {/* <Features /> */}
    </main>
  );
}
