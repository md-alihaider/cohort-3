import { SearchX } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <SearchX size={60} className="text-zinc-600" />

      <h2 className="mt-5 text-2xl font-semibold text-white">
        No Products Found
      </h2>

      <p className="mt-2 text-zinc-400">Try changing your search or filters.</p>
    </div>
  );
};

export default EmptyState;
