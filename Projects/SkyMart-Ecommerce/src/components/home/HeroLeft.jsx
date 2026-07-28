import { useContext } from "react";
import { ArrowRight } from "lucide-react";
import { Auth } from "../../context/AuthContext";

const HeroLeft = () => {
  const { loggedInUser } = useContext(Auth);

  const userName =
    loggedInUser?.fullName?.split(" ")[0] ||
    loggedInUser?.name?.split(" ")[0] ||
    "Guest";

  const hour = new Date().getHours();

  let greeting = "";

  if (hour >= 5 && hour < 12) greeting = "Good Morning";
  else if (hour >= 12 && hour < 17) greeting = "Good Afternoon";
  else if (hour >= 17 && hour < 21) greeting = "Good Evening";
  else greeting = "Good Night";

  return (
    <div className="max-w-155">
      <p className="text-xs font-bold uppercase tracking-[3px] text-primary">
        {greeting} 👋
      </p>

      <h1 className="mt-4 text-[56px] font-black leading-[0.95] tracking-tight text-white">
        Welcome back,
      </h1>

      <h1 className="text-[56px] font-black leading-[0.95] tracking-tight text-primary">
        {userName}!
      </h1>

      <p className="mt-5 max-w-130 text-[17px] leading-7 text-zinc-400">
        Discover today's picks — hand-curated products across electronics,
        fashion, and more.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button className="flex h-12 items-center gap-2 rounded-xl bg-primary px-7 font-semibold text-black transition hover:scale-105">
          Shop Now
          <ArrowRight size={16} />
        </button>

        <button className="flex h-12 items-center rounded-xl border border-zinc-700 px-7 font-medium text-white transition hover:border-primary">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default HeroLeft;
