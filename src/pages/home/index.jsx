import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../../components/Card";
import Featured from "../../components/Featured";
// import { useDispatch, useSelector } from "react-redux";
// import { getData } from "../../utils/fetch";
// import { fetchAllData } from "../../redux/news/actions";
import news from "../dummy.json";
import topNewsDummy from "./featured.json";

function Home() {
  // const redux = useSelector((state) => state.news.data);
  const redux = news.data;
  // const dispatch = useDispatch();
  const [topNews, setTopNews] = useState({
    uuid: "",
    title: "",
    image: "",
    source: "",
    published_at: "",
    description: "",
    snippet: "",
  });

  const fetchTopNews = async () => {
    // const res = await getData("/top", {
    //   locale: "us",
    //   limit: "1",
    // });
    const res = topNewsDummy;
    setTopNews({
      uuid: res.data[0].uuid,
      uuid: res.data[0].uuid,
      title: res.data[0].title,
      title: res.data[0].title,
      image: res.data[0].image_url,
      image: res.data[0].image_url,
      source: res.data[0].source,
      source: res.data[0].source,
      // published_at: res.data.data[0].published_at,
      // published_at: res.data.data[0].published_at,
      // description: res.data.data[0].description,
      // description: res.data.data[0].description,
      // snippet: res.data.data[0].snippet,
      // snippet: res.data.data[0].snippet,
      // url: res.data.data[0].url,
      // url: res.data.data[0].url,
    });
  };

  useEffect(() => {
    fetchTopNews();
    //   dispatch(fetchAllData());
    // }, [dispatch]);
  }, []);
  return (
    <div className="bg-white flex rounded  px-2 pt-2.5 sm:px-4">
      <div className="container mx-auto mb-10">
        <h1 className="mt-5 text-4xl font-bold">HOT TOPICS</h1>
        <Featured
          link={`/details/${topNews.uuid}`}
          title={topNews.title}
          image={topNews.image}
          published_at={topNews.published_at}
          source={topNews.source}
          description={topNews.description}
          snippet={topNews.snippet}
        />
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
