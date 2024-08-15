import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import Topbar from "./topbar";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Topbar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
