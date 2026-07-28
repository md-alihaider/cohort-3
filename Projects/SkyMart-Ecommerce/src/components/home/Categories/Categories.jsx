import { useContext } from "react";

import { ProductContext } from "../../../context/ProductContext";

import CategoryCard from "./CategoryCard";
import { categoryIcons } from "./categoryIcons";
import SectionHeader from "../FeaturedProducts/SectionHeader";

const Categories = () => {
  const { categoryData } = useContext(ProductContext);

  const categories = categoryData.map((category) => ({
    ...category,
    icon: categoryIcons[category.name],
  }));

  return (
    <section className="mt-20">
      <SectionHeader
        badge="Categories"
        title="Shop by Category"
        description="Browse products by category and discover your next favorite item."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
