"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute w-[200px] h-[200px] border border-[#333333] rounded-full mt-52 animate-ping" />
      <div className="absolute w-[300px] h-[300px] border border-[#333333] rounded-full mt-52 animate-ping" />
      <div className="absolute w-[500px] h-[500px] border border-[#333333] rounded-full mt-52 animate-ping" />
      <div className="absolute w-[650px] h-[650px] border border-[#f7ab0a] rounded-full opacity-20 mt-52 animate-pulse" />
      <div className="absolute w-[800px] h-[800px] border border-[#333333] rounded-full mt-52 animate-ping" />
    </motion.div>
  );
}

function Hero() {
  const [text, count] = useTypewriter({
    words: ["Eat", "Sleep", "Code", "Repeat!"],
    loop: true,
    delaySpeed: 2000,
  });
  let profileBtn =
    "px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-[#f7ab0a]/40 hover:text-[#f7ab0a]/40";
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/vikas_pic_2.jpg"
        alt="vikas_pic"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Front end developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="red" cursorStyle="_" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className={profileBtn}>About</button>
          </Link>
          <Link href="#experience">
            <button className={profileBtn}>Experience</button>
          </Link>
          <Link href="#skill">
            <button className={profileBtn}>Skills</button>
          </Link>
          <Link href="#project">
            <button className={profileBtn}>Projects</button>
          </Link>
          <Link href="#contact">
            <button className={profileBtn}>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
