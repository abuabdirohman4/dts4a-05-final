import React from "react";
import imgFeatured from "../../assets/images/Featured.png";

function Featured() {
  return (
    <div className="flex ">
      <a
        href="/"
        className="bg-white relative flex w-[76%] flex-col items-center rounded-lg p-5 pl-0 md:flex-row"
      >
        <img
          className="w-full rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg "
          src={imgFeatured}
          alt=""
        />
        <h5 className="absolute bottom-[6rem] ml-6 mb-2 w-1/2 font-playfair text-3xl font-bold tracking-tight text-white-80">
          Massa tortor nibh nulla condimentum imperdiet scelerisque...
        </h5>
        <div className="absolute bottom-[4rem] ml-6 text-white-80">
          <p className="mb-3 inline font-normal ">1 Hour Ago</p>
          <p className="ml-6 inline">CNN Indonesia</p>
        </div>
      </a>
      <div className="flex w-[24%] flex-col justify-between p-4 my-10 font-playfair leading-normal">
        <p className="mb-3 text-lg font-normal text-gray-700">
          Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
          adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
          vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris,
          magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque...
          read more
        </p>
      </div>
    </div>
  );
}

export default Featured;
