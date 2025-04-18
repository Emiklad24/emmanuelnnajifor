import React from "react";
import userData from "@constants/data";
import { motion } from "framer-motion/dist/framer-motion";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData?.about?.title}. Currently working on a{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData?.about?.currentProjectUrl}
              target="_blank"
            >
              {userData?.about?.currentProject}
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort of help / enquiry, shoot a .
                <a
                  href={`mailto:${userData?.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  target="_blank"
                >
                  mail
                </a>{" "}
                and I'll get back. I promise.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm not looking for a job currently, If you have an offer, check
                my{" "}
                <a
                  href={userData?.resumeUrl}
                  target="_blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{" "}
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center ">
                <a
                  href={userData?.socialLinks?.facebook}
                  className="flex flex-row items-center space-x-4 group"
                  target="_blank"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData?.socialLinks?.medium}
                  className="flex flex-row items-center space-x-4 group"
                  target="_blank"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Medium
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData?.socialLinks?.github}
                  className="flex flex-row items-center space-x-4 group"
                  target="_blank"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData?.socialLinks?.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                  target="_blank"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData?.socialLinks?.devto}
                  className="flex flex-row items-center space-x-4 group"
                  target="_blank"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Dev.to
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData?.about?.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <motion.div
                whileHover={{ scale: 1.1, position: "relative", zIndex: 2 }}
              >
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                  title="Javascript"
                  alt="Javascript"
                  className="h-20 w-20 mx-4 my-4"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, position: "relative", zIndex: 2 }}
              >
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                  title="typescript"
                  alt="typescript"
                  className="h-20 w-20 mx-4 my-4"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, position: "relative", zIndex: 2 }}
              >
                <img
                  src="/next-js.png"
                  className="h-20 w-20 mx-4 my-4"
                  title="next-js"
                  alt="next-js"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, position: "relative", zIndex: 2 }}
              >
                <img
                  src="/strapi.png"
                  className="h-20 w-20 mx-4 my-4"
                  title="strapi"
                  alt="strapi"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, position: "relative", zIndex: 2 }}
              >
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                  className="h-20 w-20 mx-4 my-4"
                  title="html"
                  alt="html"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, position: "relative", zIndex: 2 }}
              >
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                  className="h-20 w-20 mx-4 my-4"
                  title="CSS"
                  alt="CSS"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, position: "relative", zIndex: 2 }}
              >
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
                  className="h-20 w-20 mx-4 my-4"
                  title="vue-js"
                  alt="vue-js"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, position: "relative", zIndex: 2 }}
              >
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                  className="h-20 w-20 mx-4 my-4"
                  title="git"
                  alt="git"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, position: "relative", zIndex: 2 }}
              >
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                  className="h-20 w-20 mx-4 my-4"
                  title="react-js"
                  alt="react-js"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, position: "relative", zIndex: 2 }}
              >
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                  className="h-20 w-20 mx-4 my-4"
                  title="firebase"
                  alt="firebase"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, position: "relative", zIndex: 2 }}
              >
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                  className="h-20 w-20 mx-4 my-4"
                  title="mysql"
                  alt="mysql"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1, position: "relative", zIndex: 2 }}
              >
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                  className="h-20 w-20 mx-4 my-4"
                  title="mongoDB"
                  alt="mongoDB"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
