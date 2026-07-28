import { useContext } from "react";
import { ArrowRight } from "lucide-react";
import { Auth } from "../../context/AuthContext";

const HeroLeft = () => {
  const { loggedInUser } = useContext(Auth);

  // Get user's first name
  const userName =
    loggedInUser?.fullName?.split(" ")[0] ||
    loggedInUser?.name?.split(" ")[0] ||
    "Guest";

  // Greeting based on current time
  const hour = new Date().getHours();

  let greeting = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  return (
    <div className="max-w-155">
      <p className="text-sm font-bold uppercase tracking-widest text-primary">
        {greeting} 👋
      </p>

      <h1 className="mt-3 text-5xl font-black leading-tight text-white md:text-6xl">
        Welcome back,
      </h1>

      <h1 className="text-5xl font-black leading-tight text-primary md:text-6xl">
        {userName}!
      </h1>

      <p className="mt-6 max-w-130 text-lg leading-8 text-zinc-400">
        Discover today's picks — hand-curated products across electronics,
        fashion, and more.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <button className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-black transition hover:scale-105">
          Shop Now
          <ArrowRight size={18} />
        </button>

        <button className="rounded-xl border border-zinc-700 px-8 py-4 font-medium text-white transition hover:border-primary">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default HeroLeft;
