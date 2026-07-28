import { ShieldCheck, RefreshCcw, Truck } from "lucide-react";

import FeatureCard from "./FeatureCard";

const ProductFeatures = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Delivery",
      subtitle: "On orders over $50",
    },
    {
      icon: ShieldCheck,
      title: "Secure Pay",
      subtitle: "256-bit SSL",
    },
    {
      icon: RefreshCcw,
      title: "Easy Returns",
      subtitle: "30-day policy",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-3 gap-4">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
};

export default ProductFeatures;
