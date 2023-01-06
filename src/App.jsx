import { AiOutlineSearch } from "react-icons/ai";
import imgg from "./img/re.jpg";
import axios from "axios";
import { useState } from "react";
import { Card } from "./card";
const searchApi = process.env.SEARCHAPI
function App() {
  const [search, setSearch] = useState("");
  
  const [bookData, setBookData] = useState([]);
  const searchBook = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          searchApi
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
        console.log(bookData);
      }
 
  };
  return (
    <>
      <div className="flex items-center  container justify-center mx-auto flex-wrap  lg:justify-between py-24 px-6 ">
        <div>
          <h1 className=" md:text-[43px] text-[24px] text-center">
            {" "}
            a room without book is like <br />{" "}
            <span className=" text-cyan-400 ">a body without soul</span>
          </h1>
        </div>
        <div>
          <h2 className=" text-center text-[28px]">find your book </h2>
          <div className=" text-center mb4 ">
            <input
              type="text"
              name=""
              placeholder="enter your book Name "
              className=" my-4"
              id=""
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button>
              <AiOutlineSearch />
            </button>
            <img src={imgg} alt="" className=" h-[500px]" />
          </div>
        </div>
      </div>
      {<Card bookData={bookData} />}
    </>
  );
}
// AIzaSyB5a3D0kIx5bAA4L3ux3XsZnsXwzMXsqpw
// GET https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=AIzaSyB5a3D0kIx5bAA4L3ux3XsZnsXwzMXsqpw
export default App;
