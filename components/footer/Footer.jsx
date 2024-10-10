"use client";
import React from "react";
import Logo from "@/assets/Logo.png";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { motion } from "framer-motion";
import { SlideLeft } from "@/lib/animation/animate";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="container mx-auto py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <Image src={Logo} alt="" className="w-6" />
              <p className="text-xl font-semibold">Interior</p>
            </div>
            <p> Uttara,Dhaka,Bangladesh</p>
            <p>@ 2024 All rights reserved</p>
          </div>
          {/* Footer Link */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <Link href="#">Our Story</Link>
                </li>
                <li>
                  <Link href="#">Designer</Link>
                </li>
                <li>
                  <Link href="#">Craftmanship</Link>
                </li>
                <li>
                  <Link href="#">Sustainability</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <Link href="#">{`FAQ's`}</Link>
                </li>
                <li>
                  <Link href="#">Shipping & Returns</Link>
                </li>
                <li>
                  <Link href="#">Care Guide</Link>
                </li>
                <li>
                  <Link href="#">Guaranty</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <Link href="#">+8801771040076</Link>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <Link href="mailto:hitarikahmed@gmail.com">Email</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom section */}
        <p className="text-center text-sm font-semibold  border-t-2 pt-5 mt-5">
          &copy; 2024 All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
