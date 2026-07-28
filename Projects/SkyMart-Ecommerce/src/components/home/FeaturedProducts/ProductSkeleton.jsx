const ProductSkeleton = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-zinc-700 bg-card">
      <div className="h-52 bg-zinc-800" />

      <div className="space-y-3 p-5">
        <div className="h-5 w-24 rounded bg-zinc-800" />
        <div className="h-5 rounded bg-zinc-800" />
        <div className="h-5 w-3/4 rounded bg-zinc-800" />
        <div className="h-5 w-28 rounded bg-zinc-800" />
        <div className="h-11 rounded-xl bg-zinc-800" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
