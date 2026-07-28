import Footer from "../components/components-layouts/Footer/Footer";
import Categories from "../components/home/Categories/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts/FeaturedProducts";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import TopRatedProducts from "../components/home/TopRatedProducts/TopRatedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <main className="mx-auto max-w-300 px-6 lg:px-8">
      <Hero />
      <Stats />
      <Categories />
      <FeaturedProducts />
      <TopRatedProducts />
      <WhyChooseUs />
      <Footer/>
    </main>
  );
};

export default Home;
