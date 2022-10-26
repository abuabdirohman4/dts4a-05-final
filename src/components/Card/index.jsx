import React from "react";
import imgPost from "../../assets/images/post.png";

function Card() {
  return (
    <div className="bg-white mb-6 max-w-sm">
      {/* <div className="bg-white max-w-sm rounded-lg border border-gray-200 shadow-md"> */}
      <a href="/">
        <img src={imgPost} alt="" className="w-full rounded-lg" />
      </a>
      <div className="py-5">
        <a href="/">
          <h5 className="mb-2 font-playfair text-2xl font-bold tracking-tight text-gray-900">
          News Title Lorem Ipsum Dolor Sit Amet
          </h5>
        </a>
        <a href="/" className="text-xs text-black-20">
          <p className="mb-3 inline font-normal">1 Hour Ago</p>
          <p className="ml-6 inline">CNN Indonesia</p>
        </a>
      </div>
    </div>
  );
}

export default Card;
