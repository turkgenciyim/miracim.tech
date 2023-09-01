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

  return (
    <div id='hakkimda' className='p-3 sm:p-4 md:p-8 bg-slate-900 '>
      <div className='flex flex-wrap items-stretch justify-between w-full h-full gap-12 mx-auto sm:container'>
        <motion.h2
          initial='hide'
          whileInView='show'
          exit='hide'
          variants={introHeaderVariants}
          className='self-center w-full max-w-xl mx-auto font-sans text-5xl font-bold tracking-tighter text-center text-transparent bg-gradient-to-tr bg-clip-text from-violet-500 via-purple-500 to-indigo-500 xs:text-7xl sm:text-8xl'
        >
        Sana kendimi tanıtmak isterim.
        </motion.h2>
        <div className='px-1 py-3 mx-auto space-y-4 shadow-sm sm:px-2 xl:flex-1 rounded-xl'>
          <h2 className='text-3xl font-bold tracking-tight text-center text-white xs:text-4xl sm:text-5xl'>
            Bu yaşıma kadar neler yaptım?
          </h2>
          <div className='relative max-w-4xl'>
            <div className='absolute inset-0 flex items-center justify-center text-3xl font-bold tracking-tight text-center sm:text-4xl text-slate-300 bg-violet-900/10 backdrop-blur-xl rounded-2xl'>
              <span className='block p-4'>Nasipte varsa yazılacak. Bugadar</span>
            </div>
            <p className='p-2 mt-2 mb-1 text-sm transition-all rounded-lg sm:text-base text-slate-50 hover:bg-slate-800/40'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              vel similique dolore, aliquam laudantium dolorem corrupti eaque
              magnam recusandae asperiores mollitia dolores iure exercitationem
              sed sint minima error maiores maxime! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Suscipit quis facilis eius
              laboriosam vitae dolore incidunt accusamus ipsam consectetur
              distinctio earum alias, fuga corrupti eum blanditiis quaerat
              veniam possimus tenetur!
            </p>

            <p className='p-2 mt-2 mb-1 text-sm transition-all rounded-lg sm:text-base text-slate-50 hover:bg-slate-800/40'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              vel similique dolore, aliquam laudantium dolorem corrupti eaque
              magnam recusandae asperiores mollitia dolores iure exercitationem
              sed sint minima error maiores maxime!
            </p>

            <p className='p-2 mt-2 mb-1 text-sm transition-all rounded-lg sm:text-base text-slate-50 hover:bg-slate-800/40'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              vel similique dolore, aliquam laudantium dolorem corrupti eaque
              magnam recusandae asperiores mollitia dolores iure exercitationem
              sed sint minima error maiores maxime!
            </p>

            <p className='p-2 mt-2 mb-1 text-sm transition-all rounded-lg sm:text-base text-slate-50 hover:bg-slate-800/40'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              vel similique dolore, aliquam laudantium dolorem corrupti eaque
              magnam recusandae asperiores mollitia dolores iure exercitationem
              sed sint minima error maiores maxime!
            </p>
          </div>
        </div>
        <div className='px-1 py-3 mx-auto space-y-4 shadow-sm sm:px-2 basis-full rounded-xl'>
          <h2 className='text-3xl font-bold tracking-tight text-center text-white xs:text-4xl sm:text-5xl '>
     Hayallerim ve Tecrübelerim
          </h2>
          <div className='relative max-w-8xl'>
            <div className='absolute inset-0 flex items-center justify-center text-3xl font-bold tracking-tight text-center sm:text-4xl text-slate-300 bg-violet-900/10 backdrop-blur-xl rounded-2xl'>
            <span className='block p-4'>Nasipte varsa yazılacak. Bugadar</span>

            </div>
            <p className='p-2 mt-2 mb-1 text-sm transition-all rounded-lg sm:text-base text-slate-50 hover:bg-slate-800/40'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              vel similique dolore, aliquam laudantium dolorem corrupti eaque
              magnam recusandae asperiores mollitia dolores iure exercitationem
              sed sint minima error maiores maxime! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Suscipit quis facilis eius
              laboriosam vitae dolore incidunt accusamus ipsam consectetur
              distinctio earum alias, fuga corrupti eum blanditiis quaerat
              veniam possimus tenetur!
            </p>

            <p className='p-2 mt-2 mb-1 text-sm transition-all rounded-lg sm:text-base text-slate-50 hover:bg-slate-800/40'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              vel similique dolore, aliquam laudantium dolorem corrupti eaque
              magnam recusandae asperiores mollitia dolores iure exercitationem
              sed sint minima error maiores maxime!
            </p>

            <p className='p-2 mt-2 mb-1 text-sm transition-all rounded-lg sm:text-base text-slate-50 hover:bg-slate-800/40'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              vel similique dolore, aliquam laudantium dolorem corrupti eaque
              magnam recusandae asperiores mollitia dolores iure exercitationem
              sed sint minima error maiores maxime!
            </p>

            <p className='p-2 mt-2 mb-1 text-sm transition-all rounded-lg sm:text-base text-slate-50 hover:bg-slate-800/40'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              vel similique dolore, aliquam laudantium dolorem corrupti eaque
              magnam recusandae asperiores mollitia dolores iure exercitationem
              sed sint minima error maiores maxime!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
