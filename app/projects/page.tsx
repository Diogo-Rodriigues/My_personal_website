"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

const projects = [
  {
    title: "SeedLabs Resolution  | C - Python - Bash",
    description: "My solutions, environment setups, and detailed technical reports for the SEED Labs project.",
    image: "/Images/seedlabs.png?height=300&width=400",
    slug: "seedlabs",
    category: "Cybersecurity",
  },
  {
    title: "ML-Kaggle 1st Place  | Python",
    description: "This project tackles a Kaggle Machine Learning competition aimed at forecasting urban traffic congestion in Porto using advanced ensemble learning techniques and extensive feature engineering.",
    image: "/Images/ml-kaggle1.png?height=300&width=400",
    slug: "ml-kaggle1",
    category: "AI Systems",
  },
  {
    title: "PictuRAS Image Processing Platform  | Next.js - React - MongoDB - RabbitMQ - Microservices",
    description: "This project simulates real-world software evolution by analyzing and extending a cloud-based system, focusing on structured requirements engineering , UML modeling , and architectural implementation to improve scalability and maintainability through a three-phase engineering process.",
    image: "/Images/picturas.png?height=300&width=400",
    slug: "picturas",
    category: "Software Engineering",
  },
  {
    title: "AirTrail - DevOps  | Ansible - Docker - Kubernetes - GCP",
    description: "A Zero-touch DevOps solution for AirTrail. Automates GKE cluster provisioning, app deployment with HPA, and Google Cloud Monitoring using Ansible playbooks.",
    image: "/Images/airtrail.png?height=300&width=400",
    slug: "airtrail",
    category: "DevOps",
  },
  {
    title: "OTT Multimedia Delivery Service  | Java - CORE",
    description: "A robust Over-the-Top (OTT) delivery service that creates an Application Layer Overlay Network. Features include latency-based dynamic routing, efficient application-layer multicast, and real-time video streaming using RTP over UDP.",
    image: "/Images/ott.png?height=300&width=400",
    slug: "ott",
    category: "Software Engineering",
  },
  {
    title: "CTF Write-ups",
    description: "Here are write-ups of some CTFs (Capture the flag) I have conducted where I learned about web vulnerabilities, cryptography and general cybersecurity skills.",
    image: "/Images/CTF.png?height=300&width=400",
    slug: "CTF",
    category: "Cybersecurity",
  },
  {
    title: "Eletronics store  | React - Python - SQLite",
    description: "This is a full-stack e-commerce application built using React for the frontend and Django for the backend.",
    image: "/Images/Eletronic_Store.png?height=300&width=400",
    slug: "e-commerce-platform",
    category: "Software Engineering",
  },
  {
    title: "Theme Park Multi-Agent System  | Python",
    description: "A Multi-Agent System (MAS) simulating a theme park environment with intelligent visitors, attractions, and management agents using Python and SPADE.",
    image: "/Images/asma.png?height=300&width=400",
    slug: "asma",
    category: "AI Systems",
  },
  {
    title: "My website  | React",
    description: "This is my personal website",
    image: "/Images/My_Website.png?height=300&width=400",
    slug: "personal-website",
    category: "Web Development",
  },
  {
    title: "Optimization of a fluid dynamics simulation in 3D | C++ - CUDA",
    description: "This project was divided into 3 types of optimizations (sequential optimizations, multithreading optimizations with OpenMP and GPU implementation), where we achieved a runtime improvement of 122 times faster than the original version.",
    image: "/Images/HPC.png?height=300&width=400",
    slug: "gpu-programming",
    category: "High Performance Computing (Cuda)",
  },
  {
    title: "StockSphere | React - C# - PostgreSQL",
    description: "Modern web application that provides users with comprehensive financial information, stock market data, comments on shares, and portfolio management capabilities.",
    image: "/Images/StockSphere.png?height=300&width=400",
    slug: "financial-social-media",
    category: "Software Engineering"
  },
  {
    title: "Library Management System | C++",
    description: "This is a comprehensive C++ application designed for managing a library's collection of books and members",
    image: "/Images/Library_manager.png?height=300&width=400",
    slug: "library-management",
    category: "Software Engineering",
  },
  {
    title: "How I learned SQL queries | SQL",
    description: "This was the project I did when I first learned SQL, despite being a simple project it was very useful for me to learn at the beginning.",
    image: "/Images/SQL_queries.png?height=300&width=400",
    slug: "SQL-queries",
    category: "Databases",
  },
  {
    title: "Network traffic analysis with TCPDump",
    description: "I simulated that someone is trying to open SSH sessions into my workstation and decided to set up a surveillance script to catch any TCP traffic coming through as SSH and to catch any TCP traffic coming from a specific IP addresse.",
    image: "/Images/TCPDump.png?height=300&width=400",
    slug: "network-scanning",
    category: "Cybersecurity",
  },
  {
    title: "TCP/IP traffic with Wireshark",
    description: "In this project I want to detect certain TCP/IP network traffic on my server, specifically web traffic and train some network skills!",
    image: "/Images/Wireshark.png?height=300&width=400",
    slug: "network-scanning-wireshark",
    category: "Cybersecurity",
  },
]

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
  >
    <Image
      src={project.image || "/placeholder.svg"}
      alt={project.title}
      width={400}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-2">{project.description}</p>
      <p className="text-purple-400 mb-4">Category: {project.category}</p>
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

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/#projects" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="mr-2" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          All Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

