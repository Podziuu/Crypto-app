import React from "react";
import { useGetNewsQuery } from "../store/apis/cryptoNewsApi";
import { useGetCryptosQuery } from "../store/apis/cryptoApi";
import SingleNews from "../components/Layout/SingleNews";

const News = () => {
  const { data, isFetching } = useGetNewsQuery({
    newsCategory: "Cryptocurrency",
    count: "12",
  });

  const { data: cryptoData, isFetching: isCryptoFetching } =
    useGetCryptosQuery("100");

  if (isFetching || isCryptoFetching) {
    return "Loading...";
  }

  const news = data.value;
  const crypto = cryptoData.data.coins;
  console.log(crypto);

  return (
    <div className="flex flex-col py-8 items-center">
      <h2 className="text-2xl font-semibold mb-2">Search Specific Crypto News Here!</h2>
      <select className="mb-8">
        {crypto.map((singleCrypto) => {
          return <option>{singleCrypto.name}</option>;
        })}
      </select>
      <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-center place-content-center w-full">
        {news.map((info) => {
          return <SingleNews key={info.datePublished} data={info} />;
        })}
      </div>
    </div>
  );
};

export default News;
