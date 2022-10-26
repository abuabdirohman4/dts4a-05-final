import React from "react";
import { Link } from "react-router-dom";
import imgFeatured from "../../assets/images/Featured.png";

function Featured({ link }) {
  return (
    <div className="flex">
      <Link
        to={link}
        className="bg-white relative flex w-full flex-col items-center rounded-lg md:flex-row xl:w-[76%] xl:p-5 xl:pl-0"
      >
        <img
          className="mt-4 w-full rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg xl:mt-0"
          src={imgFeatured}
          alt=""
        />
        <div className="absolute bottom-5 ml-5 text-white-80 md:bottom-12 xl:bottom-20 xl:ml-6">
          <h5 className="mb-2 w-[90%] font-playfair text-base font-bold tracking-tight md:text-3xl xl:w-1/2 xl:text-4xl">
            Massa tortor nibh nulla condimentum imperdiet scelerisque...
          </h5>
          <div className="text-xs md:mt-4 xl:mt-6 xl:text-base">
            <p className="mb-3 inline font-normal ">1 Hour Ago</p>
            <p className="ml-6 inline">CNN Indonesia</p>
          </div>
        </div>
      </Link>
      <Link
        to={link}
        className="my-10 flex hidden w-[24%] flex-col justify-between p-4 font-playfair leading-normal xl:block"
      >
        <p className="mb-3 text-lg font-normal text-gray-700">
          Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
          adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
          vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris,
          magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque...
          read more
        </p>
      </Link>
    </div>
  );
}

export default Featured;
