"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const achievements = [
  {
    num: "01",
    title: "Champion",
    description:
      "Won the RMSTU Tech Fest 2022 - Intra University Programming Contest",
    href: "https://toph.co/contests/training/978t2q3/standings",
  },
  {
    num: "02",
    title: "Top 2% globally",
    description:
      "2% among all participants globally in several codeforces programming contest",
    href: "https://codeforces.com/contests/with/Wasi_Ur",
  },
  {
    num: "03",
    title: "Code Samurai 2022",
    description: "Awarded in Code Samurai 2022 by BJIT Limited",
    href: "https://www.facebook.com/share/p/d4bg4Y84mHUu2vFQ/",
  },
  {
    num: "04",
    title: "Expert @Codeforces",
    description: "First expert coder from my university",
    href: "https://codeforces.com/profile/Wasi_Ur",
  },
  {
    num: "05",
    title: "21th @CUET IUPC",
    description: "Ranked 21th place at CUET IUPC",
    href: "https://toph.co/c/tech-carnival-1-0/standings",
  },
  {
    num: "06",
    title: "2300+ Problems solved",
    description: "Solved 2300+ problems among different online judges including Codeforces, Leetcode and so on",
    href: "https://codeforces.com/profile/Wasi_Ur",
  },
];

const Achievement = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto pt-08">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {achievements.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {achievement.num}
                  </div>
                  <Link href={achievement.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{achievement.title}</h2>
                {/* desc */}
                <p className="text-white/60">
                  {achievement.description}
                </p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievement;
