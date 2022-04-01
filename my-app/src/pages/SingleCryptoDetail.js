import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../store/apis/cryptoApi";
import ClipLoader from "react-spinners/ClipLoader";
import CryptoChart from "../components/Layout/CryptoChart";
import millify from "millify";
import { RiMoneyDollarCircleLine, RiExchangeLine } from "react-icons/ri";
import { CgHashtag } from "react-icons/cg";
import {
  AiOutlineThunderbolt,
  AiOutlineTrophy,
  AiOutlineFund,
  AiOutlineCheck,
  AiOutlineStop,
} from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import parse from "html-react-parser";
import CryptoLink from "../components/Layout/CryptoLink";

const SingleCryptoDetail = () => {
  const [timePeriod, setTimePeriod] = useState("7d");
  const params = useParams();
  const cryptoId = params.cryptoId;
  const { data, isFetching } = useGetCryptoDetailsQuery(cryptoId);
  const { data: coinHistory, isFetching: isCryptoHistoryFetching } =
    useGetCryptoHistoryQuery({ cryptoId, timePeriod });

  if (isFetching || isCryptoHistoryFetching) {
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

  const timePeriods = ["3h", "24h", "7d", "30d", "3m", " 1y", "3y", "5y"];

  const cryptoData = data.data.coin;

  const changeHandler = (e) => {
    setTimePeriod(e.target.value);
  };

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoData?.price && millify(cryptoData?.price)}`,
      icon: <RiMoneyDollarCircleLine />,
    },
    { title: "Rank", value: cryptoData?.rank, icon: <CgHashtag /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoData["24hVolume"] && millify(cryptoData["24hVolume"])}`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Market Cap",
      value: `$ ${cryptoData?.marketCap && millify(cryptoData?.marketCap)}`,
      icon: <RiMoneyDollarCircleLine />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoData?.allTimeHigh?.price &&
        millify(cryptoData?.allTimeHigh?.price)
      }`,
      icon: <AiOutlineTrophy />,
    },
  ];

  const otherStats = [
    {
      title: "Number Of Markets",
      value: cryptoData?.numberOfMarkets,
      icon: <AiOutlineFund />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoData?.numberOfExchanges,
      icon: <RiExchangeLine />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoData?.supply?.confirmed ? (
        <AiOutlineCheck />
      ) : (
        <AiOutlineStop />
      ),
      icon: <CgDanger />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoData?.supply?.total && millify(cryptoData?.supply?.total)
      }`,
      icon: <CgDanger />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoData?.supply?.circulating &&
        millify(cryptoData?.supply?.circulating)
      }`,
      icon: <CgDanger />,
    },
  ];

  console.log(cryptoData);

  return (
    <div className="flex flex-col justify-center items-center py-4 px-8 pb-8">
      <div className="flex items-center">
        <img className="w-10" src={cryptoData.iconUrl} />
        <h1 className="text-3xl font-semibold">{cryptoData.name}</h1>
      </div>
      <p className="mt-4">{`${cryptoData.name} live price in US Dollar (USD). View value statistics, market cap and supply.`}</p>
      <div className="border border-gray-200 w-full my-10" />
      <div className="flex justify-between w-full">
        <div>
          <select
            value={timePeriod}
            onChange={changeHandler}
            className="self-start w-36 p-1"
          >
            {timePeriods.map((e) => {
              return <option key={e}>{e}</option>;
            })}
          </select>
          <h2 className="self-start text-2xl text-[#0071bd] font-bold">{`${cryptoData.name} Price Chart`}</h2>
        </div>
        <div className="flex font-bold flex-col text-lg">
          <p>Change: {`${cryptoData.change}%`}</p>
          <p>{`Current ${cryptoData.name} Price: ${millify(
            cryptoData.price
          )}$`}</p>
        </div>
      </div>
      <CryptoChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoData.price)}
        coinName={cryptoData.name}
      />
      <div className="flex justify-between w-full mt-4 items-center">
        <div className="mr-6">
          <h3 className="text-xl font-semibold text-center">
            {cryptoData.name} Value Statistics
          </h3>
          <ul>
            {stats.map((stat) => {
              return (
                <li
                  key={Math.random() * 10}
                  className="flex justify-between my-6 text-lg"
                >
                  <div className="flex items-center">
                    <div className="mr-3 text-2xl">{stat.icon}</div>
                    {stat.title}
                  </div>
                  <div className="font-bold ml-2">{stat.value}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-1/2">
          <h3 className="font-bold text-2xl">{cryptoData.name} Links</h3>
          {cryptoData.links.map((link) => {
            return <CryptoLink key={Math.random() * 10} data={link} />;
          })}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-center">
            Other Statistics
          </h3>
          <ul>
            {otherStats.map((stat) => {
              return (
                <li
                  key={Math.random() * 10}
                  className="flex justify-between my-6 text-lg"
                >
                  <div className="flex items-center">
                    <div className="mr-3 text-2xl">{stat.icon}</div>
                    {stat.title}
                  </div>
                  <div className="font-bold ml-2">{stat.value}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="crypto-info">
          <h3>What is {cryptoData.name}</h3>
          {parse(cryptoData.description)}
        </div>
        {/* <div className="w-1/2 ml-8">
          <h3 className="font-bold text-2xl">{cryptoData.name} Links</h3>
          {cryptoData.links.map((link) => {
            return <CryptoLink key={Math.random() * 10} data={link} />;
          })}
        </div> */}
      </div>
    </div>
  );
};

export default SingleCryptoDetail;
