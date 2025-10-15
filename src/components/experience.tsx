"use client";
import { motion } from "motion/react";
import Image from "next/image";

function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink=0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://plus.unsplash.com/premium_photo-1759728838623-ebeccf966507?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Title</h4>
        <p className="font-bold text-2xl mt-1">organisation name</p>
        <div className="flex space-x-2 my-2">
          <img
            width={10}
            height={10}
            className="h-10 w-10 rounded-full"
            src="https://plus.unsplash.com/premium_photo-1759728838623-ebeccf966507?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">duration</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>points</li>
        </ul>
      </div>
    </article>
  );
}

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-custom">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
