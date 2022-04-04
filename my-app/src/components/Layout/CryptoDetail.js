import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";

const CryptoDetail = (props) => {
  const data = props.crypto;

  return (
    <Link to={`/cryptocurrencies/${data.uuid}`} className="border bg-white cursor-pointer hover:shadow-slate-300 hover:shadow-lg hover:-translate-y-1 transition-transform">
      <div className="flex items-center justify-between border-b p-6">
        <h3 className="font-semibold">
          {data.rank}.{data.name}
        </h3>
        <img className="w-10" src={data.iconUrl} />
      </div>
      <div className="p-6 h-36 flex flex-col justify-between">
        <h4>Price: {millify(data.price)}$</h4>
        <h4>MarketCap: {millify(data.marketCap)}$</h4>
        <h4>Change: {millify(data.change || 0)}%</h4>
      </div>
    </Link>
  );
};

export default CryptoDetail;
