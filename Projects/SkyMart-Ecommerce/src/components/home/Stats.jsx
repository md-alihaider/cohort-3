import { Package, TrendingUp, Star, Tag } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import StatCard from "./StatCard";
import { ProductContext } from "../../context/ProductContext";

const Stats = () => {
  const { totalItems, totalPrice } = useContext(CartContext);
  const { products, categories } = useContext(ProductContext);
  const stats = [
    {
      icon: Package,
      iconBg: "bg-lime-500/10",
      iconColor: "text-primary",
      value: totalItems,
      title: "Cart Items",
      subtitle: "In your bag",
    },
    {
      icon: TrendingUp,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      value: `$${totalPrice.toFixed(2)}`,
      title: "Cart Value",
      subtitle: "Ready to checkout",
    },
    {
      icon: Star,
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-400",
      value: products.length,
      title: "Top Products",
      subtitle: "Highly rated",
    },
    {
      icon: Tag,
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-400",
      value: categories.length,
      title: "Categories",
      subtitle: "To explore",
    },
  ];

  return (
    <section className="mt-8">
      <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
