import React from "react";
import useFirebase from "./../Hooks/useFirebase";

const Home = () => {
  const { user } = useFirebase();
  console.log(user);
  return <div>Home</div>;
};

export default Home;
