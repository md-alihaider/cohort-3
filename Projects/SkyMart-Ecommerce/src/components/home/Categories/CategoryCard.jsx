import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const CategoryCard = ({ category }) => {
  const Icon = category.icon;

  return (
    <Link
      to={`/shop?category=${encodeURIComponent(category.name)}`}
      className="group block"
    >
      <div className="rounded-3xl border border-zinc-700 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-black">
          <Icon size={26} />
        </div>

        {/* Category */}
        <h3 className="mt-6 text-xl font-semibold capitalize text-white">
          {category.name}
        </h3>

        {/* Product Count */}
        <p className="mt-2 text-sm text-zinc-500">{category.count} Products</p>

        {/* Explore */}
        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
          Explore
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
