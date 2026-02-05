import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github } from "lucide-react"

const projects = [
  {
    slug: "ml-kaggle1",
    title: "ML-Kaggle 1st Place  | Python",
    description: "This project tackles a Kaggle Machine Learning competition aimed at forecasting urban traffic congestion in Porto using advanced ensemble learning techniques and extensive feature engineering.",
    image: "/Images/ml-kaggle1.png?height=600&width=800",
    details:
      "This project aims to solve a Kaggle competition challenge: predicting road traffic congestion levels in the city of Porto using historical data. Following the CRISP-DM methodology, the project involves extensive data preprocessing, feature engineering, and the implementation of advanced ensemble machine learning models.",
    github: "https://github.com/Diogo-Rodriigues/ML-Kaggle1",
  },
  {
    slug: "seedlabs",
    title: "SeedLabs Resolution  | C - Python - Bash",
    description: "My solutions, environment setups, and detailed technical reports for the SEED Labs project.",
    image: "/Images/seedlabs.png?height=600&width=800",
    details:
      "This project was developed as part of the Computer Systems Security course at the University of Minho (2025/2026). The goal is to explore fundamental security vulnerabilities, understand how they work at a low level, and implement both exploitation and mitigation strategies in controlled environments.",
    github: "https://github.com/Diogo-Rodriigues/Seed-Labs",
  },
  {
    slug: "picturas",
    title: "PictuRAS Image Processing Platform  | Next.js - React - MongoDB - RabbitMQ - Microservices",
    description: "This project simulates real-world software evolution by analyzing and extending a cloud-based system, focusing on structured requirements engineering , UML modeling , and architectural implementation to improve scalability and maintainability through a three-phase engineering process.",
    image: "/Images/picturas.png?height=600&width=800",
    details:
      "The PictuRAS project is a web-based Image Processing as a Service (SaaS) platform designed for cloud environments. It allows users to perform various image processing operations, ranging from basic tools like resizing and binarization to advanced AI-driven features like OCR and object identification. The project followed an incremental development cycle, starting from an existing base solution and evolving through requirements analysis, extension, and final implementation.",
    github: "https://github.com/Diogo-Rodriigues/PictuRAS-Image_Processing_Cloud_Platform",
  },
  {
    slug: "airtrail",
    title: "AirTrail - DevOps  | Ansible - Docker - Kubernetes - GCP",
    description: "A Zero-touch DevOps solution for AirTrail. Automates GKE cluster provisioning, app deployment with HPA, and Google Cloud Monitoring using Ansible playbooks.",
    image: "/Images/airtrail.png?height=600&width=800",
    details:
      "This project aims to automate the complete lifecycle of the AirTrail web application, a cloud-based flight tracking and history platform. It focuses on enabling fully automated deployment and configuration of the entire environment (including infrastructure, database, application, and monitoring) while minimizing manual effort. The solution is designed to maintain data durability in case of restarts or failures, dynamically scale resources according to traffic demand, and deliver continuous, real-time insights into system performance and operational health.",
    github: "https://github.com/Diogo-Rodriigues/DevOps-AirTrail",
  },
  {
    slug: "ott",
    title: "OTT Multimedia Delivery Service  | Java - CORE",
    description: "A robust Over-the-Top (OTT) delivery service that creates an Application Layer Overlay Network. Features include latency-based dynamic routing, efficient application-layer multicast, and real-time video streaming using RTP over UDP.",
    image: "/Images/ott.png?height=600&width=800",
    details:
      "This project addresses the growing demand for real-time multimedia streaming, which traditional client-server architectures struggle to scale efficiently. It focuses on developing an Application Layer Overlay Network to improve audio and video distribution by optimizing resource usage and reducing network congestion, with the goal of prototyping a system that streams real-time multimedia from a server to multiple clients.",
    github: "https://github.com/Diogo-Rodriigues/OTT-Multimedia-Delivery-Service",
  },
  {
    slug: "e-commerce-platform",
    title: "Eletronics store  | React - Python - SQLite",
    description: "This is a full-stack e-commerce application built using React for the frontend and Django for the backend.",
    image: "/Images/Eletronic_Store.png?height=600&width=800",
    details:
      "My Electronic Store is a full-stack e-commerce application built using React for the frontend and Django for the backend. This project allows users to browse, search, and purchase electronic products seamlessly. It features user authentication, order management, and a responsive design for an optimal user experience.",
    github: "https://github.com/Diogo-Rodriigues/My_Eletronic_Store",
  },
  {
    slug: "asma",
    title: "Theme Park Multi-Agent System  | Python",
    description: "A Multi-Agent System (MAS) simulating a theme park environment with intelligent visitors, attractions, and management agents using Python and SPADE.",
    image: "/Images/asma.png?height=600&width=800",
    details:
      "This project implements a Multi-Agent System (MAS) to simulate a theme park environment. It was developed to explore the conception and implementation of intelligent agents capable of perceiving their environment, interpreting information, and making coordinated decisions.",
    github: "https://github.com/Diogo-Rodriigues/ASMa",
  },
  {
    slug: "gpu-programming",
    title: "Optimization of a fluid dynamics simulation in 3D | C++ - CUDA",
    description: "This project was divided into 3 types of optimizations (sequential optimizations, multithreading optimizations with OpenMP and GPU implementation), where we achieved a runtime improvement of 122 times faster than the original version.",
    image: "/Images/HPC.png?height=600&width=800",
    details:
      "This project simulates fluid dynamics using Jos Stam's stable fluid solver in 3D, incorporating dynamic events such as adding density sources and applying forces at specified timesteps. The events are generated using a Python script and read by the C++ simulation. This project was divided into 3 types of optimizations (sequential optimizations, multithreading optimizations with OpenMP and GPU implementation), where we achieved a runtime improvement of 122 times faster than the original version.",
    github: "https://github.com/Diogo-Rodriigues/Cpp-code-optimization-with-parallelism",
  },
  {
    slug: "CTF",
    title: "CTF Write-ups",
    description: "Here are write-ups of some CTFs (Capture the flag) I have conducted where I learned about web vulnerabilities, cryptography and general cybersecurity skills.",
    image: "/Images/CTF.png?height=600&width=800",
    details:
      "Here are write-ups of some CTFs (Capture the flag) I have conducted where I learned about web vulnerabilities, cryptography and general cybersecurity skills.",
    github: "https://github.com/Diogo-Rodriigues/CTF-Write-ups",
  },
  {
    slug: "personal-website",
    title: "My website  | React",
    description: "This is my personal website",
    image: "/Images/My_Website.png?height=600&width=800",
    details:
      "This is my personal website made with react to showcase my skills, projects and allow easy communication beetwen me and interested recruits",
    github: "https://github.com/Diogo-Rodriigues/My_personal_website",
  },
  {
    slug: "financial-social-media",
    title: "StockSphere | React - C# - PostgreSQL",
    description: "Modern web application that provides users with comprehensive financial information, stock market data, comments on shares, and portfolio management capabilities.",
    image: "/Images/StockSphere.png?height=600&width=800",
    details:
      "StockSphere is a modern web application that provides users with comprehensive financial information, stock market data, and portfolio management capabilities. The platform combines real-time financial data with a user-friendly interface, allowing users to track stocks, manage their portfolios, and access detailed company information.",
    github: "https://github.com/Diogo-Rodriigues/StockSphere",
  },
  {
    slug: "library-management",
    title: "Library Management System | C++",
    description: "This is a comprehensive C++ application designed for managing a library's collection of books and members",
    image: "/Images/Library_manager.png?height=600&width=800",
    details:
      "A comprehensive C++ application designed for managing a library's collection of books and members. This system allows librarians to track books, register members, manage borrowing operations, and maintain records efficiently.",
    github: "https://github.com/Diogo-Rodriigues/LibraryManagementSystem-Cpp",
  },
  {
    slug: "SQL-queries",
    title: "How I learned SQL queries | SQL",
    description: "This was the project I did when I first learned SQL, despite being a simple project it was very useful for me to learn at the beginning.",
    image: "/Images/SQL_queries.png?height=600&width=800",
    details:
      "This was the project I did when I first learned SQL, despite being a simple project it was very useful for me to learn at the beginning.",
    github: "https://github.com/Diogo-Rodriigues/How-I-learned-SQL-queries",
  },
  {
    slug: "network-scanning",
    title: "Network traffic analysis with TCPDump",
    description: "I simulated that someone is trying to open SSH sessions into my workstation and decided to set up a surveillance script to catch any TCP traffic coming through as SSH and to catch any TCP traffic coming from a specific IP addresse.",
    image: "/Images/TCPDump.png?height=600&width=800",
    details:
      "I simulated that someone is trying to open SSH sessions into my workstation and decided to set up a surveillance script to catch any TCP traffic coming through as SSH. I also did another script to catch any TCP traffic coming from a specific IP addresse.",
    github: "https://github.com/Diogo-Rodriigues/Analyze-Network-Traffic-with-TCPDump",
  },
  {
    slug: "network-scanning-wireshark",
    title: "TCP/IP traffic with Wireshark",
    description: "In this project I want to detect certain TCP/IP network traffic on my server, specifically web traffic and train some network skills!",
    image: "/Images/Wireshark.png?height=600&width=800",
    details:
      "In this project I want to detect certain TCP/IP network traffic on my server, specifically web traffic and train some network skills!",
    github: "https://github.com/Diogo-Rodriigues/TCP-IP-traffic-with-Wireshark",
  },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/projects" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
          <ArrowLeft className="mr-2" />
          Back to Projects
        </Link>
        <h1 className="text-4xl font-bold text-white mb-6">{project.title}</h1>
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className="w-full rounded-lg shadow-lg mb-8"
        />
        <h2 className="text-2xl font-semibold text-white mb-4">Project Details</h2>
        <p className="text-gray-300">{project.details}</p>

        <div className="mt-8 text-center">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
          >
            <Github className="mr-2" size={20} />
            Explore the Code on GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}

