import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../utils/fetch";
import { useState } from "react";

function Details() {
  const params = useParams();
  const [data, setData] = useState({
    title: "",
    image: "",
    source: "",
    published_at: "",
    description: "",
    snippet: "",
    url: "",
  });

  const fetchOneData = async () => {
    try {
      const res = await getData(`/uuid/${params.uuid}`);
      setData({
        title: res.data.title,
        image: res.data.image_url,
        source: res.data.source,
        published_at: res.data.published_at,
        description: res.data.description,
        snippet: res.data.snippet,
        url: res.data.url,
      });
    } catch (error) {}
  };

  useEffect(() => {
    fetchOneData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white flex rounded  px-2 pt-2.5 sm:px-4">
      <div className="container mx-auto mb-10">
        <h1 className="my-5 text-lg font-bold md:text-2xl xl:text-3xl">
          HOT TOPICS
        </h1>
        <div className="bg-white relative rounded-lg md:flex-row">
          <img
            className="w-full rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
            src={data.image}
            alt=""
          />
        </div>
        <h1 className="mt-10 mb-2 text-xl font-bold md:text-3xl xl:text-4xl">
          {" "}
          {data.title}
        </h1>
        <div className="text-xs md:mt-4 xl:mt-6 xl:text-base">
          <p className="mb-3 inline font-normal ">{data.published_at}</p>
          <p className="ml-6 inline">{data.source}</p>
        </div>
        <p className="mb-3 mt-5 text-sm font-normal leading-7 text-gray-700 md:mt-10 md:text-base md:leading-8 lg:text-lg lg:leading-10">
          {data.description} <br />
          {data.snippet} <br />
          Full Article can read at{" "}
          <a href={data.url} className="text-blue-500 hover:text-blue-400">
            {data.url}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Details;
