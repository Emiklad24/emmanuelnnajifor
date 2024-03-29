import userData from "@constants/data";
import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

export default function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {userData?.experience?.map?.((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, position: "relative", zIndex: 2 }}
            >
              <ExperienceCard
                title={exp?.title}
                desc={exp?.desc}
                year={exp?.year}
                company={exp?.company}
                companyLink={exp?.companyLink}
              />
              {idx === userData?.experience?.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </motion.div>
          ))}
          <a href="https://profile.codersrank.io/user/emiklad24">
            <div className="mt-8">
              <img
                src="https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=summary&username=emiklad24&badges=3&show-header=true&show-avatar=true&style=--header-bg-color:%23000;--border-radius:10px"
                loading="lazy"
              />
            </div>
            <div className="mt-8">
              <img
                src="https://cr-skills-chart-widget.azurewebsites.net/api/api?username=emiklad24&skills=JavaScript,HTML,CSS,JSON,Less&show-other-skills=true"
                loading="lazy"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      {desc?.map((item) => (
        <li className="text-gray-600 dark:text-gray-400 my-2" key={item}>
          {item}
        </li>
      ))}
    </div>
  );
};
