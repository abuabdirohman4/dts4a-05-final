import React from "react";
import imgFeatured from "../../assets/images/Featured.png";

function Details() {
  return (
    <div className="bg-white flex rounded  px-2 pt-2.5 sm:px-4">
      <div className="container mx-auto mb-10">
        <h1 className="my-5 text-lg font-bold md:text-2xl xl:text-3xl">
          HOT TOPICS
        </h1>
        <a href="/" className="bg-white relative rounded-lg md:flex-row">
          <img
            className="w-full rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
            src={imgFeatured}
            alt=""
          />
        </a>
        <h1 className="mt-10 mb-2 text-xl font-bold md:text-3xl xl:text-4xl">
          {" "}
          Massa tortor nibh nulla condimentum imperdiet scelerisque...
        </h1>
        <div className="text-xs md:mt-4 xl:mt-6 xl:text-base">
          <p className="mb-3 inline font-normal ">1 Hour Ago</p>
          <p className="ml-6 inline">CNN Indonesia</p>
        </div>
        <p className="mb-3 mt-5 md:mt-10 text-sm font-normal leading-7 text-gray-700 md:text-base md:leading-8 lg:text-lg lg:leading-10">
          Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
          adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
          vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris,
          magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque...
          read more <br />
          Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
          adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
          vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris,
          magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque...
          read more <br />
          Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
          adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
          vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris,
          magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque...
          read more <br />
          Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
          adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
          vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris,
          magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque...
          read more <br />
          Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
          adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
          vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris,
          magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque...
          read more <br />
          Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
          adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
          vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris,
          magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque...
          read more <br />
          Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
          adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
          vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris,
          magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque...
          read more <br />
        </p>
      </div>
    </div>
  );
}

export default Details;
