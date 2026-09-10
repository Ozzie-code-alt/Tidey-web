import Hero from "@/components/home/Hero";
import HeadingBand from "@/components/home/HeadingBand";
import FeatureCards from "@/components/home/FeatureCards";
import RoleCards from "@/components/home/RoleCards";
import Testimonial from "@/components/home/Testimonial";
import ShortCTA from "@/components/home/ShortCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeadingBand />
      <FeatureCards />
      <RoleCards />
      <Testimonial />
      <ShortCTA />
    </main>
  );
}
