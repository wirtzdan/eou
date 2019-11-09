import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Portrait from "../components/portrait";
import { motion } from "framer-motion";

function IndexPage() {
  const PortaitContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.25,
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    }
  };

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <motion.section
        variants={PortaitContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap -mx-5 overflow-hidden"
      >
        <Portrait />
        <Portrait />
        <Portrait />
        <Portrait />
        <Portrait />
        <Portrait />
      </motion.section>
    </Layout>
  );
}

export default IndexPage;
