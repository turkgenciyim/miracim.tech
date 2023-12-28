import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  SiAdobephotoshop,
  SiAmazonaws,
  SiCss3,
  SiExpress,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPlanetscale,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiVercel
} from 'react-icons/si'
const Skills = () => {
  const introHeaderVariants = {
    hide: {
      opacity: 0,
      x: -50,
      scale: 1.5,
      transformX: '120px'
    },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transformX: '500px',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 20,
        duration: 2
      }
    }
  }

  const introHeaderIconsVariants = {
    hidden: { opacity: 1, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.0875
      }
    }
  }

  const introHeaderIcons = {
    hidden: { y: 5, opacity: 0.05, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 20,
        duration: 0.2
      }
    }
  }
  return (
    <section className='relative'>
      <Image
        src={'/skill-pattern.png'}
        fill
        alt='Skills'
        sizes='10vw, 10vw'

        className='object-cover object-center pointer-events-none'
      />
      <div className='z-10 relative flex flex-col items-center justify-center bg-no-repeat bg-cover bg-[url("/skill-pattern.png")] gap-12 pt-12 px-12 md:pb-12 m-2.5 bg-bottom rounded-xl'>
        <motion.h2
          initial='hide'
          id='becerilerim'
          whileInView='show'
          exit='hide'
          variants={introHeaderVariants}
          className='max-w-5xl mx-auto font-sans text-4xl font-bold tracking-tighter text-center text-white select-none xs:text-5xl md:text-8xl'
        >
          Web sitelerim için kullandığım teknolojiler
        </motion.h2>
        <motion.ul
          animate='visible'
          initial='hidden'
          whileInView={'show'}
          exit='hide'
          variants={introHeaderIconsVariants}
          className='grid m-0 overflow-hidden list-none grid-cols-[repeat(3,_1fr)] sm:grid-cols-[repeat(4,_1fr)] md:grid-cols-[repeat(5,_1fr)] gap-2 p-8 md:p-12 pb-3 md:pb-12 rounded-xl'
        >
          <motion.li variants={introHeaderIcons} className='relative z-10'>
            <div className='absolute hidden h-10 px-3 py-1 font-bold text-white translate-x-1/2 -translate-y-1/2 -z-10 sm:block bg-gradient-to-tr from-primary-500 to-cyan-600 -top-4 right-1/2 rounded-t-2xl'>
              NextJS
            </div>
            <SiNextdotjs className='z-20 w-16 h-16 p-3 transition-all duration-200 shadow cursor-pointer select-none xs:p-4 xs:w-28 xs:h-28 active:scale-95 hover:scale-105 bg-gradient-to-tr from-sky-500 to-cyan-600 rounded-2xl fill-slate-200 hover:fill-white' />
          </motion.li>
          <motion.li variants={introHeaderIcons} className='relative'>
            <div className='absolute z-10 hidden h-10 px-3 py-1 font-bold translate-x-1/2 -translate-y-1/2 text-primary-400 md:block bg-primary-800/5 -top-4 right-1/2 rounded-t-2xl drop-shadow-xl'>
              ReactJS
            </div>
            <SiReact className='w-16 h-16 p-3 transition-all duration-200 shadow cursor-pointer select-none xs:p-4 xs:w-28 xs:h-28 active:scale-95 hover:scale-105 bg-slate-50/5 hover:bg-white/100 rounded-2xl fill-white hover:fill-cyan-500' />
          </motion.li>
          <motion.li variants={introHeaderIcons} className='relative'>
            <div className='absolute z-10 hidden h-10 px-3 py-1 font-bold translate-x-1/2 -translate-y-1/2 md:block text-emerald-500 bg-sky-800/5 -top-4 right-1/2 rounded-t-2xl drop-shadow-xl'>
              MongoDB
            </div>
            <SiMongodb className='w-16 h-16 p-3 transition-all duration-200 shadow cursor-pointer select-none xs:p-4 xs:w-28 xs:h-28 active:scale-95 hover:scale-105 bg-slate-50/5 hover:bg-white/100 rounded-2xl fill-white hover:fill-emerald-500' />
          </motion.li>
          <motion.li variants={introHeaderIcons} className='relative'>
            <div className='absolute z-10 hidden h-10 px-3 py-1 font-bold translate-x-1/2 -translate-y-1/2 md:block text-cyan-500 bg-sky-800/5 -top-4 right-1/2 rounded-t-2xl drop-shadow-xl'>
              TailwindCSS
            </div>
            <SiTailwindcss className='w-16 h-16 p-3 transition-all duration-200 shadow cursor-pointer select-none xs:p-4 xs:w-28 xs:h-28 active:scale-95 hover:scale-105 bg-slate-50/5 hover:bg-white/100 rounded-2xl fill-white hover:fill-cyan-500' />
          </motion.li>
          <motion.li variants={introHeaderIcons} className='relative'>
            <div className='absolute z-10 hidden h-10 px-3 py-1 font-bold text-white translate-x-1/2 -translate-y-1/2 md:block bg-slate-800/5 -top-4 right-1/2 rounded-t-2xl drop-shadow-xl'>
              Framer
            </div>
            <SiFramer className='w-16 h-16 p-3 transition-all duration-200 shadow cursor-pointer select-none xs:p-4 xs:w-28 xs:h-28 active:scale-95 hover:scale-105 bg-slate-50/5 hover:bg-white/100 rounded-2xl fill-white hover:fill-slate-900' />
          </motion.li>

          <motion.li variants={introHeaderIcons}>
            <SiExpress className='w-16 h-16 p-3 transition-all duration-200 shadow cursor-pointer select-none xs:p-4 xs:w-28 xs:h-28 active:scale-95 hover:scale-105 bg-slate-50/5 hover:bg-white/100 rounded-2xl fill-white hover:fill-amber-500' />
          </motion.li>
          <motion.li variants={introHeaderIcons}>
            <SiNodedotjs className='w-16 h-16 p-3 transition-all duration-200 shadow cursor-pointer select-none xs:p-4 xs:w-28 xs:h-28 active:scale-95 hover:scale-105 bg-slate-50/5 hover:bg-white/100 rounded-2xl fill-white hover:fill-emerald-600' />
          </motion.li>
          <motion.li variants={introHeaderIcons}>
            <SiAmazonaws className='w-16 h-16 p-3 transition-all duration-200 shadow cursor-pointer select-none xs:p-4 xs:w-28 xs:h-28 active:scale-95 hover:scale-105 bg-slate-50/5 hover:bg-white/100 rounded-2xl fill-white hover:fill-orange-500' />
          </motion.li>
          <motion.li variants={introHeaderIcons}>
            <SiSupabase className='w-16 h-16 p-3 transition-all duration-200 shadow cursor-pointer select-none xs:p-4 xs:w-28 xs:h-28 active:scale-95 hover:scale-105 bg-slate-50/5 hover:bg-white/100 rounded-2xl fill-white hover:fill-emerald-600' />
          </motion.li>
          <motion.li variants={introHeaderIcons}>
            <SiPlanetscale className='w-16 h-16 p-3 transition-all duration-200 shadow cursor-pointer select-none xs:p-4 xs:w-28 xs:h-28 active:scale-95 hover:scale-105 bg-slate-50/5 hover:bg-white/100 rounded-2xl fill-white hover:fill-current' />
          </motion.li>
          <motion.li variants={introHeaderIcons}>
            <SiPrisma className='w-16 h-16 p-3 transition-all duration-200 shadow cursor-pointer select-none xs:p-4 xs:w-28 xs:h-28 active:scale-95 hover:scale-105 bg-slate-50/5 hover:bg-white/100 rounded-2xl fill-white hover:fill-primary-500' />
          </motion.li>
          <motion.li variants={introHeaderIcons}>
            <SiVercel className='w-16 h-16 p-3 transition-all duration-200 shadow cursor-pointer select-none xs:p-4 xs:w-28 xs:h-28 active:scale-95 hover:scale-105 bg-slate-50/5 hover:bg-white/100 rounded-2xl fill-white hover:fill-current' />
          </motion.li>
          <motion.li variants={introHeaderIcons}>
            <SiAdobephotoshop className='w-16 h-16 p-3 transition-all duration-200 shadow cursor-pointer select-none xs:p-4 xs:w-28 xs:h-28 active:scale-95 hover:scale-105 bg-slate-50/5 hover:bg-white/100 rounded-2xl fill-white hover:fill-primary-600' />
          </motion.li>
          <motion.li variants={introHeaderIcons}>
            <SiJavascript className='w-16 h-16 p-3 transition-all duration-300 shadow cursor-not-allowed xs:p-4 xs:w-28 xs:h-28 fill-amber-500 bg-amber-600/20 rounded-xl' />
          </motion.li>
          <motion.li variants={introHeaderIcons}>
            <SiCss3 className='w-16 h-16 p-3 transition-all duration-300 shadow cursor-not-allowed xs:p-4 xs:w-28 xs:h-28 fill-primary-500 bg-primary-600/20 rounded-xl' />
          </motion.li>
          <motion.li variants={introHeaderIcons}>
            <SiHtml5 className='w-16 h-16 p-3 transition-all duration-300 shadow cursor-not-allowed xs:p-4 xs:w-28 xs:h-28 fill-orange-500 bg-orange-600/20 rounded-xl' />
          </motion.li>
          <motion.li variants={introHeaderIcons} className='w-full col-span-4'>
            <h1 className='flex items-center justify-center w-full h-full p-3 text-xl font-medium text-center text-gray-100 transition-all duration-300 shadow cursor-not-allowed sm:text-2xl  xs:p-4 hover:bg-white/10 bg-white/5 backdrop-blur-[2px] rounded-xl'>
              Daha fazla eklemek <br /> için çabalıyorum.
            </h1>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  )
}

export default Skills
