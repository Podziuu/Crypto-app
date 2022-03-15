import React from "react";
import { useGetCryptosQuery } from "../store/apis/cryptoApi";
import CryptoDetail from "./Layout/CryptoDetail";
import { Link } from "react-router-dom";

const Crypto = () => {
  const { data, isFetching } = useGetCryptosQuery('10');

  if (isFetching) {
    return "Loading...";
  }

  const cryptos = data.data.coins.slice(0, 10);

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between ">
        <h2 className="text-3xl font-semibold my-4">
          Top 10 Cryptos In The World
        </h2>
        <Link to="/cryptocurrencies" className="font-semibold text-sky-500 cursor-pointer">Show More</Link>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 ">
        {cryptos.map((crypto) => {
          return <CryptoDetail key={crypto.uuid} crypto={crypto} />;
        })}
      </div>
    </div>
  );
};

export default Crypto;