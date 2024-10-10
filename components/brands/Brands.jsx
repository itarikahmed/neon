"use client";
import React from "react";
import Brand1 from "@/assets/brand/1.png";
import Brand2 from "@/assets/brand/2.png";
import Brand3 from "@/assets/brand/3.png";
import Brand4 from "@/assets/brand/4.png";
import Brand5 from "@/assets/brand/5.png";
import { motion } from "framer-motion";
import { SlideLeft } from "@/lib/animation/animate";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="container mx-auto py-14">
      <div className="flex flex-wrap justify-center items-center lg:justify-between gap-6  ">
        <motion.div
          variants={SlideLeft(0.2)}
          initial="initial"
          whileInView={"animate"}
        >
          <Image src={Brand1} alt="brand" className="w-[110px] md:w-[200px] " />
        </motion.div>
        <motion.div
          variants={SlideLeft(0.4)}
          initial="initial"
          whileInView={"animate"}
        >
          <Image src={Brand2} alt="brand" className="w-[110px] md:w-[200px]" />
        </motion.div>
        <motion.div
          variants={SlideLeft(0.6)}
          initial="initial"
          whileInView={"animate"}
        >
          <Image src={Brand3} alt="brand" className="w-[110px] md:w-[200px]" />
        </motion.div>
        <motion.dev
          variants={SlideLeft(0.8)}
          initial="initial"
          whileInView={"animate"}
        >
          <Image src={Brand4} alt="brand" className="w-[110px] md:w-[200px]" />
        </motion.dev>
        <motion.dev
          variants={SlideLeft(1.0)}
          initial="initial"
          whileInView={"animate"}
        >
          <Image src={Brand5} alt="brand" className="w-[110px] md:w-[200px]" />
        </motion.dev>
      </div>
    </div>
  );
};

export default Brands;
