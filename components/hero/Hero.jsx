"use client";
import React from "react";
import Image from "next/image";
import HeroPng from "@/assets/hero.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "@/lib/animation/animate";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10">
        {/* Text section */}
        <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-52 text-center md:text-left pt-20 md:pt-0 px-10">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            animate="animate"
            className="text-4xl font-bold font-serif"
          >
            TRANSFORM YOUR BRAND STORY.
          </motion.h1>
          <motion.p
            variants={SlideUp(0.5)}
            initial="initial"
            animate="animate"
            className="text-sm md:text-base text-gray-500 leading-7"
          >
            Discover the power of personalized marketing with Neon, where we
            combine creativity and analytics to deliver impactful campaigns that
            elevate your brand and foster lasting customer relationships.
          </motion.p>
          <div className="space-x-4">
            <motion.button
              variants={SlideUp(0.8)}
              initial="initial"
              animate="animate"
              className="primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
            >
              Get started
            </motion.button>
            <motion.button
              variants={SlideUp(1.1)}
              initial="initial"
              animate="animate"
              className="primary-btn uppercase"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
        {/* Images section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center justify-center "
        >
          <Image
            src={HeroPng}
            alt=""
            className="w-[80%] md:w-[700px] object-cover "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
