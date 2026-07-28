import Categories from "../components/home/Categories/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts/FeaturedProducts";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";

const Home = () => {
  return (
    <main className="mx-auto max-w-300 px-6 lg:px-8">
      <Hero />
      <Stats />
      <Categories />
      <FeaturedProducts/>
    </main>
  );
};

export default Home;
