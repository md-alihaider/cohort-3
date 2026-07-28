import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <section className="mt-8">
      <div className="relative overflow-hidden rounded-[28px] border border-zinc-700 bg-card">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)
          `,
            backgroundSize: "34px 34px",
          }}
        />

        <div className="relative flex min-h-80 flex-col justify-between px-10 py-10 lg:flex-row lg:items-center">
          <HeroLeft />

          <HeroRight />
        </div>
      </div>
    </section>
  );
};

export default Hero;
