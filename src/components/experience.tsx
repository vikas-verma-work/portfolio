"use client";
import { motion } from "motion/react";
import chetu_logo from "@/assets/chetu-logo-white.png";
import web_plant_logo from "@/assets/Webplant_logo2.webp";
import avaids_logo from "@/assets/avaids.png";
import { StaticImageData } from "next/image";

interface ExperienceCardProp {
  title: string;
  company: string;
  duration: string;
  image: StaticImageData;
  points: string[];
  techLogos: string[];
}

function ExperienceCard({
  title,
  company,
  duration,
  image,
  points,
  techLogos,
}: ExperienceCardProp) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-contain object-center"
        src={image.src}
        alt={company}
      />

      <div className="px-0 md:px-10 text-center md:text-left">
        <h4 className="text-3xl font-light">{title}</h4>
        <p className="font-bold text-2xl mt-1 text-white">{company}</p>

        <div className="flex justify-center md:justify-start space-x-2 my-2">
          {techLogos?.map((logo, index) => (
            <img
              key={index}
              className="h-10 w-10 rounded-full object-cover"
              src={logo}
              alt="tech logo"
            />
          ))}
        </div>

        <p className="uppercase py-3 text-gray-400 tracking-wider">
          {duration}
        </p>

        <ul className="list-disc space-y-3 ml-5 text-gray-200 text-base leading-6">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Chetu India Pvt. Ltd., India",
      duration: "Sep 2021 – Present",
      image: chetu_logo,
      techLogos: [
        "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        "https://cdn.worldvectorlogo.com/logos/next-js.svg",
        "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      ],
      points: [
        "Developing and maintaining scalable front-end components using React.js and Next.js.",
        "Collaborated with designers and backend teams to deliver efficient, mobile-responsive interfaces.",
        "Integrated REST APIs and enhanced UX using TypeScript and modular CSS.",
        "Led UI performance optimization, reducing bundle size and improving page load speed.",
      ],
    },
    {
      title: "Web Development Intern",
      company: "The Web Plant Pvt. Ltd., India",
      duration: "Sep 2020 – Apr 2021",
      image: web_plant_logo,
      techLogos: [
        "https://cdn.worldvectorlogo.com/logos/html-1.svg",
        "https://cdn.worldvectorlogo.com/logos/css-3.svg",
        "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
      ],
      points: [
        "Worked on HTML, CSS, and JavaScript projects; built dynamic and responsive headers, footers, and menus using HubSpot CMS.",
        "Supported senior developers in front-end bug fixes and performance optimization.",
        "Gained practical exposure to web accessibility and design consistency.",
      ],
    },
    {
      title: "Electrical Site Engineer",
      company: "Avaids Technovators Pvt. Ltd., India",
      duration: "Feb 2016 – Jun 2019",
      image: avaids_logo,
      techLogos: [
        "https://cdn-icons-png.flaticon.com/512/950/950418.png",
        "https://cdn-icons-png.flaticon.com/512/3601/3601263.png",
      ],
      points: [
        "Supervised and managed on-site electrical installations for commercial projects.",
        "Ensured safety compliance, resource management, and documentation accuracy.",
        "Built strong problem-solving and project coordination skills relevant to agile environments.",
      ],
    },
  ];

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
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
