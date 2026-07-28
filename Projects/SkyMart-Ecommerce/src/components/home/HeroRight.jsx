const HeroRight = () => {
  return (
    <div className="mt-10 flex flex-col gap-4 lg:mt-0">
      <div className="flex h-40 w-44 flex-col items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10">
        <h2 className="text-5xl font-black text-lime-400">20+</h2>

        <p className="mt-2 text-sm text-zinc-300">Products Available</p>
      </div>

      <div className="flex h-36 w-44 flex-col items-center justify-center rounded-2xl border border-zinc-700 bg-card">
        <h2 className="text-4xl font-bold text-white">Free</h2>

        <p className="mt-2 text-sm text-zinc-400">Delivery on ₹999+</p>
      </div>
    </div>
  );
};

export default HeroRight;
