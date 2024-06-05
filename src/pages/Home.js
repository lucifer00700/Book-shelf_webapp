import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const API_URL =
    "https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1";
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    } catch (error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  const handleChange = (value) => {
    setInput(value);
    const result = posts.docs.filter((user) => {
      return user && user.title && user.title.toLowerCase().includes(value);
    });
    console.log("lelo result");

    setResults(result);
  };

  return (
    <div className="h-[100rem]">
      <div className="h-[120px] flex items-center justify-evenly text-white ">
        <div className="flex items-center justify-center bg-purple-600 rounded-lg">
          {" "}
          <FaSearch className="mx-2" />{" "}
          <input
            type="text"
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            className="w-[680px] rounded-lg p-2 bg-slate-100 text-black"
          />{" "}
        </div>
      </div>

      <div>
        {results.length > 0 ? (
          <div className="grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {results.map((post, index) => (
              <Product key={post.key} post={post} number={index % 10} />
            ))}
          </div>
        ) : (
          <div>
            {loading ? (
              <Spinner />
            ) : posts.docs && posts.docs.length > 0 ? (
              <div>
                <div className="grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                  {posts.docs.map((post, index) => (
                    <Product key={post.key} post={post} number={index % 10} />
                  ))}
                </div>
                <div className="mt-24 flex justify-center items-center text-2xl font-mono">
                  Developed By &#160;{" "}
                  <a href="https://github.com/lucifer00700">
                    {" "}
                    @Kshitij Chitransh
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <p>No Data Found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
