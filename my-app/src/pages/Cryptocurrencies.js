import React from "react";
import { useGetCryptosQuery } from "../store/apis/cryptoApi";
import CryptoDetail from "../components/Layout/CryptoDetail";
import ClipLoader from "react-spinners/ClipLoader";

const Cryptocurrencies = () => {
  const { data, isFetching } = useGetCryptosQuery("100");

  if (isFetching) {
    return (
      <div className="flex w-full h-screen justify-center items-center flex-col">
        <ClipLoader className="block" color="black" loading="true" size="150px" />
        Loading...
      </div>
    );
  }

  const cryptos = data.data.coins;

  return (
    <div className="grid grid-rows-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 py-5">
      {cryptos.map((crypto) => {
        return <CryptoDetail key={crypto.uuid} crypto={crypto} />;
      })}
    </div>
  );
};
export default Cryptocurrencies;
