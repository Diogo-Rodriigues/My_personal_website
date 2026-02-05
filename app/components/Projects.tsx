"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projectCategories = [
  {
    name: "Software Engineering",
    projects: [
      {
        title: "PictuRAS Image Processing Platform  | Next.js - React - MongoDB - RabbitMQ - Microservices",
        description: "This project simulates real-world software evolution by analyzing and extending a cloud-based system, focusing on structured requirements engineering , UML modeling , and architectural implementation to improve scalability and maintainability through a three-phase engineering process.",
        image: "/Images/picturas.png?height=300&width=400",
        slug: "picturas",
      },
      {
        title: "StockSphere | React - C# - PostgreSQL",
        description: "Modern web application that provides users with comprehensive financial information, stock market data, comments on shares, and portfolio management capabilities.",
        image: "/Images/StockSphere.png?height=300&width=400",
        slug: "financial-social-media",
      },
    ],
  },
  {
    name: "Cybersecurity",
    projects: [
      {
        title: "CTF Write-ups",
        description: "Here are write-ups of some CTFs (Capture the flag) I have conducted where I learned about web vulnerabilities, cryptography and general cybersecurity skills.",
        image: "/Images/CTF.png?height=300&width=400",
        slug: "CTF",
      },
      {
        title: "SeedLabs Resolution  | C - Python - Bash",
        description: "My solutions, environment setups, and detailed technical reports for the SEED Labs project.",
        image: "/Images/seedlabs.png?height=300&width=400",
        slug: "seedlabs",
      },
    ],
  },
  {
    name: "AI Systems",
    projects: [
      {
        title: "ML-Kaggle 1st Place  | Python",
        description: "This project tackles a Kaggle Machine Learning competition aimed at forecasting urban traffic congestion in Porto using advanced ensemble learning techniques and extensive feature engineering.",
        image: "/Images/ml-kaggle1.png?height=300&width=400",
        slug: "ml-kaggle1",
      },
      {
        title: "Theme Park Multi-Agent System  | Python",
        description: "A Multi-Agent System (MAS) simulating a theme park environment with intelligent visitors, attractions, and management agents using Python and SPADE.",
        image: "/Images/asma.png?height=300&width=400",
        slug: "asma",
      },
    ],
  },
]

const ProjectCategory = ({ category, isSelected, onHover }) => (
  <motion.div
    className={`cursor-pointer p-4 rounded-lg transition-colors duration-300 ${isSelected ? "border-2 border-purple-500" : "border-2 border-transparent hover:border-purple-500"
      }`}
    onHoverStart={onHover}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h3 className="text-lg font-semibold text-center">{category.name}</h3>
  </motion.div>
)

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    whileHover={{ scale: 1.05 }}
    className="rounded-lg overflow-hidden shadow-lg"
  >
    <Image
      src={project.image || "/placeholder.svg"}
      alt={project.title}
      width={400}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <Link href={`/projects/${project.slug}`} passHref>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          View Details
        </motion.button>
      </Link>
    </div>
  </motion.div>
)

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(projectCategories[0])

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Some of my projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {projectCategories.map((category) => (
            <ProjectCategory
              key={category.name}
              category={category}
              isSelected={selectedCategory.name === category.name}
              onHover={() => setSelectedCategory(category)}
            />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {selectedCategory.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="text-center">
          <Link href="/projects" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
            >
              View All Projects
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects

