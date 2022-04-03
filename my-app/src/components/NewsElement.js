import React from "react";
import { useGetNewsQuery } from "../store/apis/cryptoNewsApi";
import SingleNews from "./Layout/SingleNews";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const NewsElement = () => {
  const { data, isFetching } = useGetNewsQuery({
    newsCategory: "Cryptocurrency",
    count: "6",
  });

  if (isFetching) {
    return (
      <div className="flex w-full h-screen justify-center items-center flex-col">
        <ClipLoader
          className="block"
          color="black"
          loading="true"
          size="150px"
        />
        Loading...
      </div>
    );
  }

  const news = data.value;

  return (
    <div className="py-6">
      <div className="flex items-center justify-between ">
        <h2 className="text-3xl font-semibold my-4">Latest Crypto News</h2>
        <Link
          to="/news"
          className="font-semibold text-sky-500 cursor-pointer mr-4"
        >
          Show More
        </Link>
      </div>
      <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-center place-content-center w-full">
        {news.map((info) => {
          return <SingleNews key={info.datePublished} data={info} />;
        })}
      </div>
    </div>
  );
};

export default NewsElement;
