"use client";
import { motion } from "motion/react";
import StackIcon from "tech-stack-icons";

function Skill({ directionLeft }: { directionLeft: boolean }) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <StackIcon name="react" />
      </motion.div>
      <div className="h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 absolute opacity-0 group-hover:opacity-80 group-hover:bg-white transition duration-300 ease-in-out rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

function skill() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profieciency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
      </div>
    </motion.div>
  );
}

export default skill;
