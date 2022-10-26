import React from "react";
import { Link } from "react-router-dom";
import imgPost from "../../assets/images/post.png";

function Card({ link }) {
  return (
    <div className="bg-white mb-6 max-w-sm">
      <Link to={link}>
        <img src={imgPost} alt="" className="w-full rounded-lg" />
      </Link>
      <div className="py-5">
        <Link to={link}>
          <h5 className="mb-2 font-playfair text-base font-bold tracking-tight text-gray-900 md:text-lg lg:text-2xl">
            News Title Lorem Ipsum Dolor Sit Amet
          </h5>
        </Link>
        <Link to={link} className="text-[10px]  text-black-20 md:text-xs">
          <p className="mb-3 inline font-normal">1 Hour Ago</p>
          <p className="ml-6 inline">CNN Indonesia</p>
        </Link>
      </div>
    </div>
  );
}

export default Card;
