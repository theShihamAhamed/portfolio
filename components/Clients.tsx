"use client";

import React from "react";

import { technologies } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        Here&apos;s My Tech
        <span className="text-sky-400"> Stack</span>
      </h1>

      <div className="flex justify-center items-center mt-20">
        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-16 max-lg:mt-10">
          {technologies.map((tech) => (
            <React.Fragment key={tech.id}>
              <div>
                <img
                  src={tech.img}
                  alt={tech.name}
                  width={tech.id === 4 || tech.id === 5 ? 100 : 150}
                  className="lg:w-40 md:w-36 w-24 lg:max-h-8 max-h-6 "
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
