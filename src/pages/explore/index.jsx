import React from "react";
import Card from "../../components/Card";
import Featured from "../../components/Featured";

function Explore() {
  return (
    <div className="bg-white flex rounded  px-2 pt-2.5 sm:px-4">
      <div className="container mx-auto mb-10">
        <h1 className="mt-5 mb-4 text-3xl font-bold">Explore Our News</h1>
        <div className="grid grid-flow-col grid-rows-4 gap-4 md:grid-rows-3 xl:grid-rows-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Explore;