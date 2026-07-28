import Footer from "../components/components-layouts/Footer/Footer";
import Categories from "../components/home/Categories/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts/FeaturedProducts";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import TopRatedProducts from "../components/home/TopRatedProducts/TopRatedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Categories />
      <FeaturedProducts />
      <TopRatedProducts />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Home;
