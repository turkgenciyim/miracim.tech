import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
  const introHeaderVariants = {
    hide: {
      opacity: 0,
      x: -200,
      y: -200
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 20,
        duration: 0.5
      }
    }
  }

  return <div id='hakkimda' className=''></div>
}

export default About
