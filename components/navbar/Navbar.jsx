"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const navLinks = [
    { id: 1, title: "About", link: "#" },
    { id: 2, title: "Services", link: "#" },
    { id: 3, title: "Projects", link: "#" },
    { id: 4, title: "Contact", link: "#" },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-6 flex justify-between items-center"
    >
      {/* Logo section */}
      <div className="flex items-center">
        <Image src={Logo} alt="logo" className="w-24" />
        <span className="text-3xl font-bold">NEON</span>
      </div>
      {/* Link section */}
      <div className="hidden md:block !space-x-12">
        {navLinks.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.link}
              className="inline-block mx-4 text-lg font-semibold"
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      {/* Button section */}
      <div>
        <button className="primary-btn">Try For Free</button>
      </div>
    </motion.div>
  );
};

export default Navbar;
