import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function About({}: Props) {
  return (
     <div className="flex flex-col relative h-screen w-full text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center">
       <h3 className='top-24 absolute uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3> 
       <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            opacity:1,
            x:0,
        }}
        viewport={{
           once:true, 
        }}
        src="../../mwas.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 object-cover object-top xl:w-[300px] xl:h-[400px] "
       />
     </div>
    )
}