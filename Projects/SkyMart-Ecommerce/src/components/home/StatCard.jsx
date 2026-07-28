const StatCard = ({
  icon: Icon,
  iconBg,
  iconColor,
  value,
  title,
  subtitle,
}) => {
  return (
    <div className="rounded-3xl border border-zinc-700 bg-card px-6 py-5 transition-all duration-300 hover:border-primary">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${iconBg}`}
        >
          <Icon size={20} className={iconColor} />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-[36px] font-bold leading-none text-white">
            {value}
          </h2>

          <h3 className="mt-2 text-[17px] font-semibold text-white">{title}</h3>

          <p className="mt-1 text-sm text-zinc-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
