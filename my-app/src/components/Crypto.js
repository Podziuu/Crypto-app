import React from "react";
import { useGetCryptosQuery } from "../store/apis/cryptoApi";
import CryptoDetail from "./Layout/CryptoDetail";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Crypto = () => {
  const { data, isFetching } = useGetCryptosQuery("10");

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

  const cryptos = data.data.coins.slice(0, 10);

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between ">
        <h2 className="text-3xl font-semibold my-4">
          Top 10 Cryptos In The World
        </h2>
        <Link
          to="/cryptocurrencies"
          className="font-semibold text-sky-500 cursor-pointer mr-4"
        >
          Show More
        </Link>
      </div>
      <div className="grid grid-rows-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-5 px-4">
        {cryptos.map((crypto) => {
          return <CryptoDetail key={crypto.uuid} crypto={crypto} />;
        })}
      </div>
    </div>
  );
};

export default Crypto;
