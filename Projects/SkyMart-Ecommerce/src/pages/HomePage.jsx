import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";

const Home = () => {
  return (
    <main className="mx-auto max-w-300 px-6 lg:px-8">
      <Hero />
      <Stats/>
    </main>
  );
};

export default Home;
