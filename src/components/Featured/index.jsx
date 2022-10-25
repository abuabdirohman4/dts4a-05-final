import React from "react";
import imgFeatured from "../../assets/images/Featured.png";

function Featured() {
  return (
    <div className="bg-white flex rounded  px-2 py-2.5 sm:px-4">
      <div className="container mx-auto">
        <h1 className="mt-5 text-4xl font-bold">HOT TOPICS</h1>
        <div className="flex items-center">
          <a
            href="/"
            className="bg-white relative flex w-2/3 flex-col items-center rounded-lg p-5 pl-0 md:flex-row"
          >
            {/* halo */}
            <img
              className="w-full rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg"
              src={imgFeatured}
              alt=""
            />
            <h5 className="absolute bottom-32 ml-6 mb-2 font-playfair text-3xl text-2xl font-bold tracking-tight text-white-80">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <div className="flex w-1/3 flex-col justify-between  p-4 font-playfair leading-normal">
            <p className="mb-3 font-normal text-gray-700 ">
              Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
              adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
              vivamus pharetra. Velit, dui, egestas nisi, elementum mattis
              mauris, magnis. Massa tortor nibh nulla condimentum imperdiet
              scelerisque... read more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
