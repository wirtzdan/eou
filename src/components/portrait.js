import React from "react";
import { motion } from "framer-motion";

function Portrait() {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      variants={item}
      className="my-5 px-5 w-1/2 overflow-hidden lg:w-1/3 text-center"
    >
      <img
        className="rounded mb-4"
        src="https://images.unsplash.com/photo-1521117660421-ce701ed42966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      ></img>
      <h2 className="text-4xl">Bo Schaden</h2>
      <span className="text-xl text-gray-700">Wisozk Ltd</span>
    </motion.div>
  );
}

export default Portrait;
