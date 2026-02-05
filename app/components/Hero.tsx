import { ArrowDown, Code, Shield, Cloud, Brain, Server } from "lucide-react"

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center px-6 py-8">
        {" "}
        {/* Update 2: Adjusted container padding */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 pb-2 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400">
          {" "}
          {/* Update 1: Added padding and adjusted line height */}
          Diogo Rodrigues Portfolio
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Cybersecurity enthusiast with a separate interest in Intelligent Systems.
        </p>
        <div className="flex justify-center space-x-8 mb-12">
          <div className="flex flex-col items-center">
            <Code className="w-12 h-12 text-green-400 mb-2" />
            <span className="text-green-400">Software Engineering</span>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-purple-400 mb-2" />
            <span className="text-purple-400">Cybersecurity</span>
          </div>
          <div className="flex flex-col items-center">
            <Brain className="w-12 h-12 text-red-400 mb-2" />
            <span className="text-red-400">AI & ML</span>
          </div>
          <div className="flex flex-col items-center">
            <Cloud className="w-12 h-12 text-yellow-400 mb-2" />
            <span className="text-yellow-400">DevOps/Cloud</span>
          </div>
          <div className="flex flex-col items-center">
            <Server className="w-12 h-12 text-blue-400 mb-2" />
            <span className="text-blue-400">HPC</span>
          </div>
        </div>
        <a
          href="#about"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 ease-in-out transform hover:scale-105"
        >
          Explore My Work
          <ArrowDown className="inline-block ml-2" />
        </a>
      </div>
    </section>
  )
}

export default Hero

