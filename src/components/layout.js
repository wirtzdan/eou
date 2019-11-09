import React from "react";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="mx-auto max-w-6xl">
      <Header />
      <main className="">{children}</main>
    </div>
  );
}

export default Layout;
