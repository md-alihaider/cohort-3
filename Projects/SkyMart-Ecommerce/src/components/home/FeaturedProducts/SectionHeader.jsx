import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const SectionHeader = ({
  badge,
  title,
  description,
  buttonText = "View All",
  buttonLink = "/shop",
}) => {
  return (
    <div className="mb-8 flex items-end justify-between">
      <div>
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          {badge}
        </span>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          {title}
        </h2>

        <p className="mt-2 max-w-xl text-zinc-400">{description}</p>
      </div>

      {buttonText && (
        <Link
          to={buttonLink}
          className="hidden md:flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3"
        >
          {buttonText}
          <ArrowRight size={18} />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
