import React from 'react'
import { motion } from 'framer-motion'
import { BiLogoDiscordAlt } from 'react-icons/bi'
import Link from 'next/link'
const Showcase = () => {
  const introHeaderVariants = {
    hide: {
      opacity: 0.02,
      scale: 0.7,
      x: -200
    },
    show: {
      opacity: 1,
      scale: 1,
      x: 0,

      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 20,
        duration: 1
      }
    }
  }
  return (
    <motion.div
    id='iletisim'
      initial='hide'
      whileInView='show'
      exit='hide'
      variants={introHeaderVariants}
      className='flex flex-col items-center justify-center px-4 space-y-8 font-bold bg-gradient-to-tr from-blue-700 to-sky-800 py-14'
    >
      <h2 className='px-4 text-4xl font-bold tracking-tighter text-center xs:text-5xl text-slate-100 md:text-6xl lg:text-7xl'>
        Modern? Hızlı? web site mi? <br /> dostummm doğru yerdesin!
      </h2>
      <Link href={"https://discord.com/users/619925060387340299"} className='flex items-center justify-between gap-8 py-4 pl-10 pr-6 text-lg transition-all bg-white shadow md:py-5 md:pr-8 hover:bg-blue-500 group md:pl-14 rounded-xl'>
        <span className='inline-block font-bold tracking-tight uppercase transition-all text-slate-800 group-hover:text-white'>
          Bana yazın
        </span>
        <BiLogoDiscordAlt className='w-10 h-10 transition-all fill-blue-500 group-hover:fill-white' />
      </Link>
    </motion.div>
  )
}

export default Showcase
