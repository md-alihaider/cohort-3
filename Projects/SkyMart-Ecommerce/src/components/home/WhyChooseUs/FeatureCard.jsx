import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group rounded-3xl border border-zinc-700 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-black">
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-3 leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
