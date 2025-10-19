"use client";
import { motion } from "motion/react";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.webp";
import p3 from "@/assets/p3.jpeg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import { StaticImageData } from "next/image";

const projects = [
  {
    title: "Dynamic Badge Printing Desktop App",
    description: `
      Developed a desktop application using Electron.js and React for printing dynamic event badges.
      Designed badges with variable image sizes, fonts, and barcodes positioned dynamically using JSON configuration.
      Implemented real-time status flags for internet connectivity and printer availability.
      Optimized layout rendering and print accuracy across multiple devices.
    `,
    tech: "Electron.js, React.js, JavaScript, JSON, HTML5, CSS3",
    image: p1,
  },
  {
    title: "File Sync Desktop Application",
    description: `
      Built an Electron + React-based desktop application for file synchronization.
      Features include user authentication, room selection, and automatic file downloads with progress tracking.
      Added directory navigation, open/delete options, and auto-update checks for changed files.
      Ensured reliable file handling and smooth UI performance for large file sets.
    `,
    tech: "Electron.js, React.js, REST API, File System APIs",
    image: p2,
  },
  {
    title: "Crop and Soil Monitoring Application",
    description: `
      Created a React web application to monitor crops and soil data using Mapbox GL for interactive maps.
      Implemented React Context API for global state management and UI synchronization.
      Developed data visualization components for displaying environmental and field metrics.
    `,
    tech: "React.js, Mapbox GL, Context API, REST APIs, Tailwind CSS",
    image: p3,
  },
  {
    title: "NFT E-Commerce Platform",
    description: `
      Developed a multi-role React application (Admin, Celebrity, Fan) for buying and selling digital NFTs.
      Implemented user authentication, credit card payments, and NFT management modules.
      Integrated TanStack Query for optimized data fetching and state management.
      Designed admin dashboards for monitoring transactions and user activities.
    `,
    tech: "React.js, TanStack Query, REST API, Stripe/Credit Card Payment",
    image: p4,
  },
  {
    title: "Real Estate E-Commerce Platform",
    description: `
      Built a React-based e-commerce application for listing and selling real estate properties (houses, villas, land).
      Added full e-commerce functionalities — search filters, property details, and checkout workflows.
      Used Docker for containerized builds and deployment.
    `,
    tech: "React.js, Docker, REST API, Tailwind CSS",
    image: p5,
  },
  {
    title: "E-Commerce Platform for Gun Optics",
    description: `
      Developed an e-commerce web app for listing and selling gun optics.
      Integrated Braintree PayPal for payments and ShipStation API for shipping management.
      Implemented live image capture for user profile verification and document uploads.
      Delivered a complete purchase-to-shipment workflow with secure payment integration.
    `,
    tech: "React.js, Braintree PayPal, ShipStation API, HTML5, CSS3",
    image: p6,
  },
];

interface ProjectProp {
  title: string;
  description: string;
  tech: string;
  image: StaticImageData;
}

function ProjectCard({ project }: { project: ProjectProp }) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-10 md:p-20 sm:space-y-8 space-y-2">
      <motion.img
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={project.image.src}
        alt={project.title}
        className="rounded-lg object-cover w-40 h-20 sm:w-80 sm:h-52 md:w-[500px] md:h-[300px]"
      />
      <div className="sm:space-y-5 space-y-2 max-w-4xl text-center md:text-left">
        <h4 className="sm:text-4xl text-2xl font-semibold">{project.title}</h4>
        <p className="text-gray-300 text-sm md:text-base whitespace-pre-line">
          {project.description}
        </p>
        <p className="text-[#10b981] font-medium">{project.tech}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full sm:px-10 px-0 sm:justify-evenly justify-end mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-custom">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#10b981]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
