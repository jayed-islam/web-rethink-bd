import HomeView from "@/section/home/view/home-view";
import React from "react";
import favicon from "../../../public/favicon.png";

export const metadata = {
  title: "Web Rethink BD",
  description: "Web Rethink BD - by Jayed",
  icons: {
    icon: "../../../public/favicon.png",
  },
};

const Home = () => {
  return <HomeView />;
};

export default Home;
