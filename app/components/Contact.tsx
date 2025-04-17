"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, Mail } from "lucide-react"

const SocialLinks = () => (
  <div className="flex justify-center space-x-6">
    <motion.a
      href="https://www.linkedin.com/in/diogo--rodrigues"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-purple-400 hover:text-purple-300"
    >
      <Linkedin size={24} />
    </motion.a>
    <motion.a
      href="https://github.com/Diogo-Rodriigues"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-purple-400 hover:text-purple-300"
    >
      <Github size={24} />
    </motion.a>
    <motion.a
      href="mailto:dio.rodrigues.04.career@gmail.com"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-purple-400 hover:text-purple-300"
    >
      <Mail size={24} />
    </motion.a>
  </div>
)

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
        >
          Let's Connect
        </motion.h2>
        <div className="max-w-md mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-300 mb-8"
          >
            Feel free to reach out through any of these platforms
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8"
          >
            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

