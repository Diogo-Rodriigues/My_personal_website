"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const skillCategories = [
  {
    name: "Programming",
    icon: "💻",
    skills: ["Python", "C/C++", "C#", "Haskell", "Bash Script", "HTML/CSS", "JavaScript/TypeScript", "SQL"],
  },
  {
    name: "Frameworks",
    icon: "🛠️",
    skills: ["React", "Node.js", ".NET", "Django", "Flask", "FastAPI", "CUDA", "Numpy", "Scipy", "Matplotlib", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "TailwindCSS"],
  },
  {
    name: "Tools",
    icon: "🔧",
    skills: ["Git", "Docker", "Linux", "Bash", "MatLab", "TCPDump", "Wireshark", "TINA-TI", "Tanner-Tools", "COMSOL Multiphysics"],
  },
  {
    name: "Databases",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite",],
  },
  {
    name: "Concepts",
    icon: "🧠",
    skills: ["Machine Learning", "Cryptography", "Penetration test", "Computer Networks", "Software Development (Full-Stack)", "Data Structures and Algorithms", "Parallel Computing", "Instrumentation (Analog and digital circuits)", "Control Theory", "Signal processing", "Embedded systems and Microcontrollers"],
  },
  {
    name: "Soft skills",
    icon: "🙋‍♂️",
    skills: ["Fluent in Portuguese and English", "Determined", "Ambitious", "Organized", "Inquisitive", "humble", "self-taught/quick learner"],
  },
]

const SkillCategory = ({ category, isSelected, onHover }) => (
  <motion.div
    className={`cursor-pointer p-4 rounded-lg transition-colors duration-300 ${
      isSelected ? "border-2 border-blue-500" : "border-2 border-transparent hover:border-blue-500"
    }`}
    onHoverStart={onHover}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex items-center justify-center">
      <span className="text-3xl mr-2">{category.icon}</span>
      <h3 className="text-lg font-semibold">{category.name}</h3>
    </div>
  </motion.div>
)

const SkillList = ({ skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8"
  >
    {skills.map((skill, index) => (
      <motion.div
        key={skill}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="border border-gray-700 rounded-full px-4 py-2 text-center"
      >
        {skill}
      </motion.div>
    ))}
  </motion.div>
)

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0])

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.name}
              category={category}
              isSelected={selectedCategory.name === category.name}
              onHover={() => setSelectedCategory(category)}
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <SkillList key={selectedCategory.name} skills={selectedCategory.skills} />
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills

