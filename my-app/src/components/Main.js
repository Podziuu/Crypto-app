import React from "react";
import { useGetCryptosQuery } from "../store/apis/cryptoApi";
import millify from "millify";
import ClipLoader from "react-spinners/ClipLoader";

const Main = () => {
  const { data, isFetching } = useGetCryptosQuery("1");

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

  const globalStats = data.data.stats;

  return (
    <div className="">
      <h1 className="text-4xl font-semibold">Global Crypto Stats</h1>
      <div className="w-full md:w-3/4 lg:w-1/2 flex justify-between mt-6">
        <div>
          <h2 className="text-lg font-semibold">Market Cap</h2>
          <p className="text-lg">{millify(globalStats.totalMarketCap)}</p>
          <h2 className="text-xl font-semibold mt-4">Total Exchanges</h2>
          <p className="text-lg">{millify(globalStats.totalExchanges)}</p>
          <h2 className="text-xl font-semibold mt-4">Total Markets</h2>
          <p className="text-lg">{millify(globalStats.totalMarkets)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">24h Volume</h2>
          <p className="text-lg">{millify(globalStats.total24hVolume)}</p>
          <h2 className="text-xl font-semibold mt-4">Total Cryptocurrencies</h2>
          <p className="text-lg">{millify(globalStats.totalCoins)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
