import React, { Fragment } from "react";
import Main from "../components/Main";
import Crypto from "../components/Crypto";
import NewsElement from "../components/NewsElement";

const Home = () => {
  return (
    <Fragment>
      <Main />
      <Crypto />
      <NewsElement />
    </Fragment>
  );
};

export default Home;
