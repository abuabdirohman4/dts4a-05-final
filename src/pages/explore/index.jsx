import React, { useEffect } from "react";
import Card from "../../components/Card";
// import { useDispatch, useSelector } from "react-redux";
// import { getData } from "../../utils/fetch";
// import { fetchAllData } from "../../redux/news/actions";
import news from "../dummy.json";

function Explore() {
  // const redux = useSelector((state) => state.news.data);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllData());
  // }, [dispatch]);

  const redux = news.data;

  return (
    <div className="bg-white flex rounded  px-2 pt-2.5 sm:px-4">
      <div className="container mx-auto mb-10">
        <h1 className="mt-5 mb-4 text-3xl font-bold">Explore Our News</h1>
        <div className="grid grid-flow-col grid-rows-4 gap-4 md:grid-rows-3 xl:grid-rows-2">
          {redux &&
            redux.map((data, index) => (
              <Card
                key={index}
                link={"/details"}
                title={data.title}
                published_at={data.published_at}
                source={data.source}
                image={data.image_url}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
