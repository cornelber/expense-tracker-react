import React from "react";
import { BalanceComponent } from "../components/BalanceComponent";
import { HistoryComponent } from "../components/HistoryComponent";
import LayoutComponent from "../components/LayoutComponent";

const HomePage = () => {
  return (
    <LayoutComponent>
      <BalanceComponent />
      <HistoryComponent />
    </LayoutComponent>
  );
};

export default HomePage;
