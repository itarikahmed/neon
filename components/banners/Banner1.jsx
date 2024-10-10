"use client";
import React from "react";
import Banner from "@/assets/banner1.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

import { SlideUp } from "@/lib/animation/animate";
const Banner1 = () => {
  return (
    <div className="container mx-auto py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* image section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col justify-center  "
        >
          <Image src={Banner} alt="" className="w-[95%] md:w-full mx-auto" />
        </motion.div>
        {/* text section */}
        <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px] ">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold font-serif"
          >
            We Believe that a team makes any project better
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-sm leading-7"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            earum accusantium tempore nam aliquid{" "}
          </motion.p>
          <div>
            <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
            >
              Discover Now
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
