import React from "react";
import { HeaderComponent } from "./HeaderComponent";
import { ModalsBarComponent } from "./ModalsBarComponent";

const LayoutComponent = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <main className="main">
        <div className="main-container">{children}</div>
        <ModalsBarComponent />
      </main>
    </>
  );
};

export default LayoutComponent;
