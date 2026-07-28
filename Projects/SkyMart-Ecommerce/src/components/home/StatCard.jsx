import React from "react";

const StatCard = ({
  icon: Icon,
  iconBg,
  iconColor,
  value,
  title,
  subtitle,
}) => {
  return (
    <div
      className="
        h-27
        rounded-[22px]
        border
        border-zinc-700
        bg-card
        px-6
        flex
        items-center
        gap-4
        transition-all
        duration-300
        hover:border-primary
      "
    >
      <div
        className={`h-14 w-14 rounded-2xl flex items-center justify-center ${iconBg}`}
      >
        <Icon size={22} className={iconColor} />
      </div>

      <div>
        <h2 className="text-[34px] font-bold leading-none text-white">
          {value}
        </h2>

        <p className="mt-2 text-[15px] font-medium text-zinc-200">{title}</p>

        <p className="text-xs text-zinc-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default StatCard;
