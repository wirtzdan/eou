import React from "react";
import { Menu, Twitter, Instagram } from "react-feather";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 2 }}
      className="flex justify-between items-center container py-12 bg-white sticky top-0"
    >
      <Menu />
      <span className="text-3xl">Entrepreneurs of Utrecht</span>
      <div className="flex">
        <Twitter className="mr-4" />
        <Instagram />
      </div>
    </motion.header>
  );
}

export default Header;
