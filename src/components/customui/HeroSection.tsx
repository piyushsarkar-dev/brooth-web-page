import BlurText from "../BlurText";

const HeroSection = () => {
  return (
    <section className="h-[90vh]">
      <div className="grid h-full place-items-center">
        <BlurText
          text="Welcome to BROOTH X — the ultimate community "
          delay={200}
          animateBy="words"
          direction="top"
          className="mb-8 max-w-3xl text-center text-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
