import { useContext } from "react";

import { ProductContext } from "../../../context/ProductContext";

import { categoryIcons } from "./categoryIcons";
import CategoryCard from "./CategoryCard";
import SectionHeader from "../FeaturedProducts/SectionHeader";

const Categories = () => {
  const { categories } = useContext(ProductContext);

  return (
    <section className="mt-20">
      <SectionHeader
        badge="Categories"
        title="Shop by Category"
        description="Explore products organized into categories to quickly find what you're looking for."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = categoryIcons[category];

          return <CategoryCard key={category} title={category} Icon={Icon} />;
        })}
      </div>
    </section>
  );
};

export default Categories;
