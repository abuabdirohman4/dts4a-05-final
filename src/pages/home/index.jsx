import React from "react";
import Card from "../../components/Card";
import Featured from "../../components/Featured";
import news from "../dummy.json";

function Home() {
  const redux = news.data;
  return (
    <div className="bg-white flex rounded  px-2 pt-2.5 sm:px-4">
      <div className="container mx-auto mb-10">
        <h1 className="mt-5 text-4xl font-bold">HOT TOPICS</h1>
        <Featured link={"/details"} />
        <h1 className="mt-5 mb-4 text-3xl font-bold">Latest News</h1>
        <div className="grid grid-flow-col grid-rows-3 gap-4 md:grid-rows-2 xl:grid-rows-2">
          {redux &&
            redux.map((data, index) => (
              <Card
                key={index}
                link={`/details/${data.uuid}`}
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

export default Home;
