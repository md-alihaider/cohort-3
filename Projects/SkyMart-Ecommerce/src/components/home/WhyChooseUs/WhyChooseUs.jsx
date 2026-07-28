import React from "react";
import { Truck, ShieldCheck, RefreshCcw, Headset } from "lucide-react";

import FeatureCard from "./FeatureCard";
import SectionHeader from "../FeaturedProducts/SectionHeader";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description:
      "Enjoy fast and free shipping on eligible orders across the country.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Every transaction is protected with trusted and encrypted payment gateways.",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description:
      "Changed your mind? Return your order quickly with our hassle-free return policy.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description:
      "Our friendly support team is available anytime to help with your questions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="mt-20">
      <SectionHeader
        badge="Why Choose Us"
        title="Why Shop With SkyMart?"
        description="We're committed to giving you the best shopping experience from start to finish."
        buttonText=""
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
