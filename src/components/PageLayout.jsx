import React from "react";
import Header from "./header/Header";
import SideBar from "./sideBar/SideBar";

function PageLayout({ children }) {
  return (
    <div className="App">
      <div className="app__container">
        <Header />
          <SideBar/>
          {children}
        <footer ></footer>
      </div>
    </div>
  );
}

export { PageLayout };
