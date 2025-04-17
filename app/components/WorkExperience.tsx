"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Briefcase } from "lucide-react"

interface ExperienceItem {
  date: string
  title: string
  company: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    date: "When do we start? 🙂",
    title: "To be continued...",
    company: "...",
    description:
      "Waiting for future opportunities...",
  },
  {
    date: "2025 - Present",
    title: "Machine learning R&D",
    company: "LIP",
    description:
      "Recently I had the opportunity to join a LIP project in partnership with DGT for classifying very high spatial resolution images of mainland Portugal using machine learning techniques.",
  },
  {
    date: "2022 - Present",
    title: "Tutor",
    company: "Freelancer",
    description:
      "I have been a freelance tutor for secondary students studying Mathematics A and Physics and Chemistry A, which helped me a lot to create the spirit of creativity, sacrifice and responsibility",
  },
]

const ExperienceCard: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0.5, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col md:flex-row items-center gap-8 relative ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-500"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 0.5 }}
      />
      <div className="flex-1 text-center md:text-left z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-600 rounded-full p-2 inline-block mb-4"
        >
          <Briefcase className="w-6 h-6 text-white" />
        </motion.div>
        <h3 className="text-xl font-bold text-blue-500">{item.title}</h3>
        <p className="text-white">{item.company}</p>
        <p className="text-sm text-blue-300">{item.date}</p>
      </div>
      <motion.div
        className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg z-10"
        initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-white">{item.description}</p>
      </motion.div>
    </motion.div>
  )
}

const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-24 relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} item={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience

