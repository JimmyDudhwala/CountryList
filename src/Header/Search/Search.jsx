import { useContext } from "react";
import { ContextQuery } from "../../contextQuery/ContextQuery";

function Search() {
  const { setQuery } = useContext(ContextQuery);
  return (
    <>
      <div className="searchBox  flex justify-start items-center w-60 h-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:none  transition duration-150 ease-in-out bg-white text-black font hover:bg-gray-100">
        <div className="searchICon m-5">
          <svg
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              height: "12px",
              width: "12px",
            }}
          >
            <title>Search</title>
            <path
              d="M11.8 10.864L8.859 7.918a4.912 4.912 0 0 0-.444-6.47A4.888 4.888 0 0 0 4.928 0a4.888 4.888 0 0 0-3.485 1.449 4.942 4.942 0 0 0 0 6.979 4.888 4.888 0 0 0 3.485 1.449c1.052 0 2.105-.33 2.976-1.005l2.96 2.93a.658.658 0 0 0 .476.198.686.686 0 0 0 .477-.198.672.672 0 0 0-.016-.938zm-6.855-2.32c-.97 0-1.858-.38-2.549-1.054C1 6.09 1 3.802 2.396 2.387a3.578 3.578 0 0 1 2.549-1.054c.97 0 1.858.379 2.548 1.054s1.052 1.58 1.052 2.551c0 .971-.378 1.86-1.052 2.552a3.539 3.539 0 0 1-2.548 1.053z"
              fill="#777"
            />
          </svg>
        </div>
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search"
          className="w-full  outline-none placeholder-gray-300  hover:bg-gray-100"
        />
      </div>
    </>
  );
}

export default Search;
