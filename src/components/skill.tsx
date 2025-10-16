"use client";
import { motion } from "motion/react";
import StackIcon from "tech-stack-icons";

interface SkillProps {
  name: string;
  title: string;
  percent: number;
  directionLeft: boolean;
}

function Skill({ name, title, percent, directionLeft }: SkillProps) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-center rounded-full border border-gray-500 bg-[#1f1f1f] w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <StackIcon name={name} className="w-14 h-14 md:w-16 md:h-16" />
      </motion.div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-95 group-hover:bg-white transition duration-300 ease-in-out rounded-full flex flex-col items-center justify-center text-center">
        <p className="text-xl md:text-2xl font-semibold text-black">{title}</p>
        <p className="text-lg md:text-xl font-bold text-black">{percent}%</p>
      </div>
    </div>
  );
}

function Skills() {
  const skillData = [
    { name: "react", title: "React", percent: 95 },
    { name: "nextjs2", title: "Next.js", percent: 90 },
    { name: "redux", title: "Redux", percent: 90 },
    { name: "typescript", title: "TypeScript", percent: 85 },
    { name: "js", title: "JavaScript", percent: 95 },
    { name: "html5", title: "Html5", percent: 100 },
    { name: "css3", title: "Css3", percent: 95 },
    { name: "tailwindcss", title: "Tailwind", percent: 90 },
    { name: "antd", title: "Ant Design", percent: 90 },
    { name: "git", title: "Git", percent: 90 },
    { name: "github", title: "GitHub", percent: 90 },
    { name: "jest", title: "Jest", percent: 80 },
    { name: "vercel", title: "Vercel", percent: 90 },
    { name: "netlify", title: "Netlify", percent: 85 },
    { name: "docker", title: "Docker", percent: 70 },
  ];

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
        Hover over a skill to view proficiency level
      </h3>

      <div className="grid grid-cols-4 gap-5 mt-20">
        {skillData.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            title={skill.title}
            percent={skill.percent}
            directionLeft={index % 2 === 0}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
