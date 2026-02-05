import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Diogo Rodrigues</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/Diogo-Rodriigues" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-blue-400 transition-colors duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/diogo--rodrigues" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors duration-300" />
            </Link>
            <Link href="mailto:dio.rodrigues.04.career@gmail.com">
              <Mail className="w-6 h-6 hover:text-blue-400 transition-colors duration-300" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Diogo Rodrigues. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

