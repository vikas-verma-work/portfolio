"use client";
import { motion } from "motion/react";
import self_image from "@/assets/my_self.jpg";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl sm:py-0 py-10 px-10 sm:justify-evenly justify-end mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        className="mb-5 md:mb-0 flex-shrink-0 w-32 h-32 sm:w-50 sm:h-50 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={self_image.src}
        alt="Profile photo"
      />

      <div className="px-0 md:px-10 ">
        <h4 className="md:text-4xl sm:3xl text-2xl font-semibold md:mb-10 mb-6">
          Here is a little background
        </h4>
        <div className="sm:p-0 p-2 sm:max-h-none max-h-[250px] md:overflow-auto overflow-y-scroll">
          <p className="text-sm leading-6 text-gray-300 md:mb-10 mb-6">
            I&apos;m a{" "}
            <span className="font-medium text-white">Frontend Developer </span>
            with over 4 years of experience building responsive,
            performance-optimized web applications using modern technologies
            like{" "}
            <span className="font-medium text-white">
              React.js, Next.js, TypeScript, HTML5, and CSS3
            </span>
            . I’m passionate about crafting clean, intuitive user interfaces and
            writing maintainable, scalable code aligned with UI/UX best
            practices.
          </p>
          <p className="text-sm leading-6 text-gray-300">
            My journey began in{" "}
            <span className="font-medium text-white">
              Electrical Engineering
            </span>
            , where I developed strong analytical and problem-solving skills.
            Over time, I transitioned into IT—bringing a unique perspective that
            combines engineering logic with creative design thinking. I thrive
            in collaborative environments and continuously explore new tools,
            frameworks, and patterns to stay ahead in the evolving frontend
            ecosystem.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
