import { ArrowRight } from "lucide-react";

const HeroLeft = () => {
  return (
    <div className="max-w-155">
      <p className="text-sm font-bold uppercase tracking-widest text-lime-400">
        Good Morning 👋
      </p>

      <h1 className="mt-3 text-[64px] font-black leading-[0.95] tracking-tight text-white">
        Welcome back,
      </h1>

      <h1 className="text-[64px] font-black leading-[0.95] tracking-tight text-lime-400">
        Ali!
      </h1>

      <p className="mt-6 max-w-130 text-[18px] leading-8 text-zinc-400">
        Discover today's picks — hand-curated products across electronics,
        fashion, and more.
      </p>

      <div className="mt-10 flex gap-5">
        <button className="flex items-center gap-2 rounded-xl bg-lime-400 px-8 py-4 font-semibold text-black transition hover:scale-105">
          Shop Now
          <ArrowRight size={18} />
        </button>

        <button className="rounded-xl border border-zinc-700 px-8 py-4 font-medium text-white transition hover:border-lime-400">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default HeroLeft;
