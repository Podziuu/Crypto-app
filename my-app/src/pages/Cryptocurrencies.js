import React, { useRef, useState } from "react";
import { useGetCryptosQuery } from "../store/apis/cryptoApi";
import CryptoDetail from "../components/Layout/CryptoDetail";
import ClipLoader from "react-spinners/ClipLoader";

const Cryptocurrencies = () => {
  const { data, isFetching } = useGetCryptosQuery("100");
  const [filteredCrypto, setFilteredCrypto] = useState(null);
  const inputRef = useRef();

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

  const cryptos = data.data.coins;

  const changeHandler = (e) => {
    const currentValue = inputRef.current.value;
    const filteredCryptos = cryptos.filter((crypto) => {
      return crypto.name.toLowerCase().startsWith(currentValue.toLowerCase());
    });
    setFilteredCrypto(filteredCryptos);

    if(currentValue.length === 0) {
      console.log('siema')
      setFilteredCrypto(null)
    }
  };

  return (
    <div className="flex flex-col items-center pt-4 min-h-screen w-full">
      <input
        className="border p-2 w-72"
        placeholder="Search Cryptocurrency"
        ref={inputRef}
        onChange={changeHandler}
      />
      <div className="grid grid-rows-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-5 py-5 w-4/5 sm:w-full px-4">
        {filteredCrypto === null &&
          cryptos.map((crypto) => {
            return <CryptoDetail key={crypto.uuid} crypto={crypto} />;
          })}
        {filteredCrypto !== null &&
          filteredCrypto.map((crypto) => {
            return <CryptoDetail key={crypto.uuid} crypto={crypto} />;
          })}
      </div>
      {(filteredCrypto !== null || filteredCrypto?.length === 0) && (
        <h2 className="text-2xl text-center">No Cryptocurrency Found</h2>
      )}
    </div>
  );
};
export default Cryptocurrencies;
