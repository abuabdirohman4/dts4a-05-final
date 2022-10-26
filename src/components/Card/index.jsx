import React from "react";
import { Link } from "react-router-dom";

function Card({ link, title, published_at, source, image }) {
  return (
    <div className="bg-white mb-6 max-w-sm">
      <Link to={link}>
        <img
          src={image}
          alt="title"
          className="h-32 w-full rounded-lg md:h-40 xl:h-52"
        />
      </Link>
      <div className="py-5">
        <Link to={link}>
          <h5 className="mb-2 font-playfair text-base font-bold tracking-tight text-gray-900 md:text-lg lg:text-2xl">
            {title}
          </h5>
        </Link>
        <Link to={link} className="text-[10px]  text-black-20 md:text-xs">
          <p className="mb-3 inline font-normal">{published_at.slice(0, 10)}</p>
          <p className="ml-6 inline">{source}</p>
        </Link>
      </div>
    </div>
  );
}

export default Card;
