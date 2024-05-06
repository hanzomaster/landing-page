import FeatureCards from "@/components/pages/feature-cards";
import Features from "@/components/pages/features";
import Hero from "@/components/pages/hero";
import Image from "next/image";
export default function HomePage() {
  return (
    <main>
      <div className="bg-gradient-to-from-slate-700to-slate-100 absolute -z-10 h-[95%] w-screen from-slate-400 to-slate-950 object-cover dark:bg-gradient-to-b">
        <Image className="-z-50" src={"/5.png"} alt="landing-page image" fill />
        {/* <Carousel images={images}/> */}
      </div>
      <Hero />
      <FeatureCards />
      <Features />
    </main>
  );
}
