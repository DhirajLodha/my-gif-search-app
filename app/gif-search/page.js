"use client";

import { useState } from "react";
import { searchGifs } from "../../lib/giphy";

const GifSearch = ({ userName }) => {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const gifsPerPage = 3;

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const results = await searchGifs(query);
      setGifs(results);
      setCurrentPage(1); // Reset to first page on new search
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    }
    setLoading(false);
  };

  const indexOfLastGif = currentPage * gifsPerPage;
  const indexOfFirstGif = indexOfLastGif - gifsPerPage;
  const currentGifs = gifs.slice(indexOfFirstGif, indexOfLastGif);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(gifs.length / gifsPerPage);

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <form onSubmit={handleSearch} className="flex flex-row ">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for GIFs"
            className="w-[642px] h-14 p-4 mt-5 mr-2 border border-gray-300 bg-gray-100 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-[110px] h-14 mt-5  bg-black text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Search
          </button>
        </form>
        {loading && (
          <p className="mt-4 text-center text-blue-500">Loading...</p>
        )}
        {gifs.length === 0 && !loading && (
          <p className="mt-6 text-center text-gray-500">No GIF Found</p>
        )}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {currentGifs.map((gif) => (
            <img
              key={gif.id}
              src={gif.images.fixed_height.url}
              alt={gif.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          ))}
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber + 1)}
              className="bg-gray-300 text-black rounded-lg px-4 py-2 hover:bg-gray-400"
            >
              {pageNumber + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GifSearch;
