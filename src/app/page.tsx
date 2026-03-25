import HeroSection from "@/components/customui/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs Starter Frontend",
  description: "Production grade Next.js starter template",
};

const page = () => {
  return (
    <section>
      <HeroSection />
    </section>
  );
};

export default page;
