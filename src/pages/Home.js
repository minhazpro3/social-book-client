import React, { useEffect, useState } from "react";
import Feeds from "../components/Feeds";
import FeedsCard from "../components/FeedsCard";
import useFirebase from "./../Hooks/useFirebase";

const Home = () => {
  return (
    <div>
      Home
      <Feeds />
      <FeedsCard />
    </div>
  );
};

export default Home;
