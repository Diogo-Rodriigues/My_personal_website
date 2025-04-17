import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft , Github} from "lucide-react"

const projects = [
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
  {
    slug: "Master-Slave-Interface",
    title: "Manchester Based Master-Slave Bus Interface",
    description: "This project implements a Master-Slave communication system using Manchester encoding for data transmission.",
    image: "/Images/Bus-Interface.png?height=600&width=800",
    details:
      "This project implements a Master-Slave communication system using Manchester encoding for data transmission. The system ensures synchronized communication, correct addressing of sensors, and error detection mechanisms to maintain data integrity.",
    github: "https://github.com/Diogo-Rodriigues/Manchester-Based-Master-Slave-Bus-Interface-",
  },
  {
    slug: "Instrumentation-Amplifier",
    title: "Instrumentation Amplifier for measuring biopotentials generated by human body",
    description: "This practical work aims to study the acquisition and amplification of differential signals using an instrumentation amplifier. The focus is on measuring biopotentials generated by the human body, such as EMG (electromyogram), EOG (electro-oculogram), EEG (electroencephalogram) and ECG (electrocardiogram).",
    image: "/Images/Instrumentation-Amplifier.png?height=600&width=800",
    details:
      "This practical work aims to study the acquisition and amplification of differential signals using an instrumentation amplifier. The focus is on measuring biopotentials generated by the human body, such as EMG (electromyogram), EOG (electro-oculogram), EEG (electroencephalogram) and ECG (electrocardiogram). The practical experiment will focus on ECG measurement as it is one of the easiest signals to observe. For this, three electrodes will be used: two to capture the differential signal from the heart and one as a reference. The instrumentation amplifier will be responsible for amplifying and filtering the signal before processing.",
    github: "https://github.com/Diogo-Rodriigues/Instrumentation-Amplifier-for-measuring-biopotentials-generated-by-human-body",
  },
  {
    slug: "RLC-circuit",
    title: "The RLC circuit as a frequency filter series and parallel",
    description: "This work aimed to analyze the behavior of RLC circuits, in resonance, both in series and in parallel.",
    image: "/Images/RLC.png?height=600&width=800",
    details:
      "This work aimed to analyze the behavior of RLC circuits, in resonance, both in series and in parallel. By assembling bandpass filters and due to the frequency response, the resonance frequency, bandwidth and quality of each circuit were determined. With these results, the equations that allow obtaining the theoretical values ​​were confirmed.",
    github: "https://github.com/Diogo-Rodriigues/The-RLC-circuit-as-a-frequency-filter-series-and-parallel-",
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

