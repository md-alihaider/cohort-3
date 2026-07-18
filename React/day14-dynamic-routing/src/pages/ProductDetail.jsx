import axios from "axios";
import { Heart, ShoppingCart, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const [singleProductData, setSingleProductData] = useState({});
  console.log(singleProductData)
  let { id } = useParams();

  const getSingleProductData = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProductData(res.data);
    } catch (error) {
      console.log("Error in api calling in Products Detail: ", error);
    }
  };

  useEffect(() => {
    getSingleProductData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-8 p-8">
        {/* Product Image */}
        <div className="flex justify-center items-center bg-gray-50 rounded-xl p-8">
          <img
            src={singleProductData.image}
            alt={singleProductData.title}
            className="h-96 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-5">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full w-fit text-sm capitalize">
            {singleProductData.category}
          </span>

          <h1 className="text-3xl font-bold">{singleProductData.title}</h1>

          <div className="flex items-center gap-2">
            <Star size={20} className="fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{singleProductData.rating?.rate}</span>

            <span className="text-gray-500">
              ({singleProductData.rating?.count} Reviews)
            </span>
          </div>

          <h2 className="text-4xl font-bold text-green-600">
            ${singleProductData.price}
          </h2>

          <p className="text-gray-600 leading-7">{singleProductData.description}</p>

          {/* <div className="flex items-center gap-4">
            <button
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="border rounded-lg p-2"
            >
              <Minus size={18} />
            </button>

            <span className="text-xl font-semibold">{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="border rounded-lg p-2"
            >
              <Plus size={18} />
            </button>
          </div> */}

          <div className="flex gap-4 mt-4">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2">
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            <button className="bg-pink-100 hover:bg-pink-200 text-pink-600 p-3 rounded-lg">
              <Heart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
