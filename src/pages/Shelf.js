import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/Shelfitem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  

  return (
    <div className="h-[1080px]" >
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cart.map((item, index) => {
              return <CartItem key={item.key} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
            <div className="flex flex-col gap-5 ">
            <div className="font-semibold text-xl text-purple-800 ">Your Book Shelf</div>
              <div className="font-semibold text-5xl text-purple-700  -mt-5">Summary</div>
              <p className="text-xl">
                <span className="text-gray-700 font-semibold text-xl">Total Books : {cart.length}</span>
              </p>
            </div>
            </div>

            <div className="flex flex-col">
              {/* <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ₹{totalAmount}</p> */}
              <button className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3 mb-3 text-xl">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your Shelf is empty!
          </h1>
          <Link to={"/"}>
            <button className="uppercase bg-purple-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-semibold hover:text-purple-700 p-3 px-10 tracking-wider">
              Explore Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;