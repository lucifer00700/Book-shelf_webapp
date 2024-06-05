import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post, number }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.key));
    toast.error("Item removed from Cart");
  };

  return (
    <div
      className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline"
    >
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40  font-semibold text-lg text-purple-800 text-[10px] text-left">
          by :{" "}
          {post.author_name
            ? post.author_name[number] || post.author_name[0]
            : "Unknown Author"}
        </p>
      </div>

      <div className="h-[40px]">
        <p className="w-40 font-semibold text-lg text-purple-800 text-[10px] text-left">
          Published in {post.publish_year}
        </p>
      </div>

      <p className=" w-40  text-purple-600 font-semibold">
        Published in: {post.place ? post.place : "not known"}
      </p>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        {cart.some((p) => p.key === post.key) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
