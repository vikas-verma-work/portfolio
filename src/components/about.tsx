"use client";
import { motion } from "motion/react";

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
        src="https://images.unsplash.com/photo-1760288256101-bb930c69bb61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eius
          cum, quod ipsum quis recusandae nihil in incidunt? Vero placeat autem
          officia. Expedita, esse optio recusandae deleniti veniam facilis
          temporibus! Ullam natus, inventore voluptate obcaecati voluptas
          necessitatibus aspernatur tempora minima iusto. Eaque veritatis
          aperiam tenetur ipsam, esse amet magnam modi pariatur aspernatur ea
          doloribus dicta delectus, voluptate dolorem nobis neque provident
          laboriosam cum alias sit enim deleniti! Odio in inventore consequatur
          dolorum fugiat modi corporis. Quisquam corrupti vitae quia eveniet
          temporibus consectetur! At, incidunt animi! Aspernatur esse assumenda
          pariatur at ipsam consequuntur asperiores necessitatibus?
          Reprehenderit itaque rem tempore voluptatibus quibusdam.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
