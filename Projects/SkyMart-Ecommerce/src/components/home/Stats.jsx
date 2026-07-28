import { Package, TrendingUp, Star, Tag } from "lucide-react";

import StatCard from "./StatCard";

const Stats = () => {
  const stats = [
    {
      icon: Package,
      iconBg: "bg-lime-500/10",
      iconColor: "text-primary",
      value: "0",
      title: "Cart Items",
      subtitle: "In your bag",
    },
    {
      icon: TrendingUp,
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      value: "$0.00",
      title: "Cart Value",
      subtitle: "Ready to checkout",
    },
    {
      icon: Star,
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-400",
      value: "5",
      title: "Top Products",
      subtitle: "Highly rated",
    },
    {
      icon: Tag,
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-400",
      value: "6",
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
