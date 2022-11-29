import React from "react";
import Feeds from "../components/Feeds";
import useFirebase from "./../Hooks/useFirebase";

const Home = () => {
  const { user } = useFirebase();
  console.log(user);
  return (
    <div>
      Home
      <Feeds />
    </div>
  );
};

export default Home;
