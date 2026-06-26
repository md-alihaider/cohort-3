const ProductCard = () => {
  return (
    <div className=" h-3/6 w-2/5 bg-white rounded-xl shadow-md p-5 flex flex-col ">
      <div className="w-full h-[70%]  flex">
        <div className=" h-full w-[45%] bg-gray-400 rounded-xl overflow-hidden">
          <img
            src="https://sony.scene7.com/is/image/sonyglobalsolutions/Headphones-product-finder-desktop-and-mobile-Headband-714x439?$productFinder$&fmt=png-alpha"
            alt="product-image"
            className=" h-full w-full object-cover"
          />
        </div>
        <div className=" h-full w-[55%] p-5 rounded-xl"></div>
      </div>
      <div className="w-full h-[30%] bg-gray-800"></div>
    </div>
  );
};

export default ProductCard;
