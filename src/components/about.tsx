"use client";
import { motion } from "motion/react";
import self_image from "@/assets/my_self.jpg";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={self_image.src}
        alt="Profile photo"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>
        <p className="text-sm leading-6 text-gray-300">
          I&apos;m a{" "}
          <span className="font-medium text-white">Frontend Developer </span>
          with over 4 years of experience building responsive,
          performance-optimized web applications using modern technologies like{" "}
          <span className="font-medium text-white">
            React.js, Next.js, TypeScript, HTML5, and CSS3
          </span>
          . I’m passionate about crafting clean, intuitive user interfaces and
          writing maintainable, scalable code aligned with UI/UX best practices.
        </p>

        <p className="text-sm leading-6 text-gray-300">
          My journey began in{" "}
          <span className="font-medium text-white">Electrical Engineering</span>
          , where I developed strong analytical and problem-solving skills. Over
          time, I transitioned into IT—bringing a unique perspective that
          combines engineering logic with creative design thinking. I thrive in
          collaborative environments and continuously explore new tools,
          frameworks, and patterns to stay ahead in the evolving frontend
          ecosystem.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
