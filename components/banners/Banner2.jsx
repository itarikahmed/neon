"use client";
import React from "react";
import Banner1 from "@/assets/banner2.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "@/lib/animation/animate";
import Image from "next/image";

const Banner2 = () => {
  return (
    <div className="container mx-auto py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* text section */}
        <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold font-serif"
          >
            Simple way to make stylish brand.
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-sm leading-7"
          >
            We believe that every brand has a story to tell. Our mission is to
            help you craft and share that story with the world through
            innovative marketing strategies that resonate, engage, and convert.
          </motion.p>
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="flex gap-3"
          >
            <div className="max-w-[80px] space-y-2">
              <p className="text-3xl font-bold font-serif">15</p>
              <p className="text-gray-500 text-sm">Years of Experience</p>
            </div>
            <div className="max-w-[80px] space-y-2">
              <p className="text-3xl font-bold font-serif">350</p>
              <p className="text-gray-500 text-sm">Happy Clients</p>
            </div>
            <div className="max-w-[80px] space-y-2">
              <p className="text-3xl font-bold font-serif">34</p>
              <p className="text-gray-500 text-sm">Award Gained</p>
            </div>
          </motion.div>
          <div>
            <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
        {/* image section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col justify-center  "
        >
          <Image src={Banner1} alt="" className="w-[95%] md:w-full mx-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner2;
