import React from "react";
import moment from "moment";

const SingleNews = (props) => {
  const info = props.data;

  const notFoundImg =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

  return (
    <a href={info.url} target="_blank" className="bg-white p-4 max-w-lg border h-fit mx-auto cursor-pointer hover:shadow-slate-300 hover:shadow-lg hover:-translate-y-1 transition-transform">
      <div className="flex justify-between">
        <h3 className="font-semibold w-2/3 text-lg">{info.name}</h3>
        <img src={info.image?.thumbnail.contentUrl || notFoundImg} />
      </div>
      <p className="my-4">{info.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-8 mr-2"
            src={info.provider[0].image?.thumbnail.contentUrl || notFoundImg}
          />
          {info.provider[0].name}
        </div>
        <p className="text-slate-400">
          {moment(info.datePublished).startOf("second").fromNow()}
        </p>
      </div>
    </a>
  );
};

export default SingleNews;
