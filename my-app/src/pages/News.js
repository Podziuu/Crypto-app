import React, { useState } from "react";
import { useGetNewsQuery } from "../store/apis/cryptoNewsApi";
import { useGetCryptosQuery } from "../store/apis/cryptoApi";
import SingleNews from "../components/Layout/SingleNews";
import ClipLoader from "react-spinners/ClipLoader";

const News = () => {
  const [category, setCategory] = useState("Cryptocurrency");

  const { data, isFetching } = useGetNewsQuery({
    newsCategory: category,
    count: "12",
  });

  console.log(data);

  const { data: cryptoData, isFetching: isCryptoFetching } =
    useGetCryptosQuery("100");

  if (isFetching || isCryptoFetching) {
    return (
      <div className="flex w-full h-screen justify-center items-center flex-col">
        <ClipLoader className="block" color="black" loading="true" size="150px" />
        Loading...
      </div>
    );
  }

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const news = data.value;
  const crypto = cryptoData.data.coins;

  return (
    <div className="flex flex-col py-8 items-center">
      <h2 className="text-2xl font-semibold mb-2">
        Search Specific Crypto News Here!
      </h2>
      <select className="mb-8" onChange={changeCategory} value={category}>
        <option>Cryptocurrency</option>
        {crypto.map((singleCrypto) => {
          return <option key={singleCrypto.uuid}>{singleCrypto.name}</option>;
        })}
      </select>
      <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-center place-content-center w-full">
        {news.map((info) => {
          return <SingleNews key={`${info.datePublished} ${Math.random()}`} data={info} />;
        })}
      </div>
    </div>
  );
};

export default News;
