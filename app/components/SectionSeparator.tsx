"use client"

import { motion } from "framer-motion"

const SectionSeparator = () => {
  return (
    <div className="py-12 flex justify-center items-center">
      <motion.div
        className="w-16 h-1 bg-blue-500 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  )
}

export default SectionSeparator

