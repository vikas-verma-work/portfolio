"use client";
import { motion } from "motion/react";

function Projectcard() {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://plus.unsplash.com/premium_photo-1759728838623-ebeccf966507?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"
        alt=""
      />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">Title</h4>
        <p className="text-lg text-center md:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          doloremque a sed nihil delectus voluptatum natus animi maiores
          corporis quaerat maxime placeat laboriosam, deleniti totam, quas minus
          quidem sint iure.
        </p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-custom">
        <Projectcard />
        <Projectcard />
        <Projectcard />
        <Projectcard />
        <Projectcard />
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
