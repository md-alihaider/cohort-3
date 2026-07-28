const FeatureCard = ({ icon: Icon, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-700 p-5 text-center">
      <Icon size={22} className="text-primary" />

      <h4 className="mt-3 font-semibold text-white">{title}</h4>

      <p className="mt-1 text-xs text-zinc-500">{subtitle}</p>
    </div>
  );
};

export default FeatureCard;
