import React, { useEffect } from "react";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData, setKeyword } from "../../redux/news/actions";

function Explore() {
  const redux = useSelector((state) => state.news);
  const data = redux.data;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch, redux.keyword]);

  return (
    <div className="bg-white flex rounded  px-2 pt-2.5 sm:px-4">
      <div className="container mx-auto mb-10">
        <div className="mt-5 mb-4 flex flex-wrap justify-between xl:flex-row">
          <h1 className="text-3xl font-bold">Explore Our News</h1>
          <div className="mb-3 w-full md:mb-0 md:w-auto">
            <button
              type="button"
              className="mr-1 rounded-lg p-2.5 text-sm  text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 md:hidden"
            >
              <span className="sr-only">Search</span>
            </button>
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Search..."
                value={redux.keyword}
                onChange={(e) => {
                  dispatch(setKeyword(e.target.value));
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-flow-col grid-rows-4 gap-4 md:grid-rows-3 xl:grid-rows-2">
          {redux.status === "process" ? (
            <Loader />
          ) : (
            data &&
            data.map((data, index) => (
              <Card
                key={index}
                link={`/details/${data.uuid}`}
                title={data.title}
                published_at={data.published_at}
                source={data.source}
                image={data.image_url}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Explore;
