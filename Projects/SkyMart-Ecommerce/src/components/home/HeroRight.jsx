const HeroRight = () => {
  return (
    <div className="flex flex-row gap-4 lg:flex-col">
      <div className="flex h-27 w-28.75 flex-col items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
        <h2 className="text-3xl font-black text-primary">20+</h2>

        <p className="mt-1 text-center text-[11px] leading-4 text-zinc-300">
          Products
          <br />
          Available
        </p>
      </div>

      <div className="flex h-27 w-28.75 flex-col items-center justify-center rounded-2xl border border-zinc-700 bg-card">
        <h2 className="text-3xl font-bold text-white">Free</h2>

        <p className="mt-1 text-center text-[11px] leading-4 text-zinc-500">
          Delivery
          <br />
          on ₹999+
        </p>
      </div>
    </div>
  );
};

export default HeroRight;
