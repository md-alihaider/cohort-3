import { ArrowRight } from "lucide-react";

const CategoryCard = ({ title, Icon }) => {
  return (
    <div className="group cursor-pointer rounded-3xl border border-zinc-700 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon size={26} />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-white capitalize">
        {title}
      </h3>

      <p className="mt-2 text-sm text-zinc-500">
        Browse products in this category.
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
        Explore
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
