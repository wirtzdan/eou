import React from "react";
import { Menu, Twitter, Instagram } from "react-feather";

function Header() {
  return (
    <header className="flex justify-between items-center container py-12 bg-white sticky top-0">
      <Menu />
      <span className="text-3xl">Entrepreneurs of Utrecht</span>
      <div className="flex">
        <Twitter className="mr-4" />
        <Instagram />
      </div>
    </header>
  );
}

export default Header;
