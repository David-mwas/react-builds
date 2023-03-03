import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
type Props = {}

export default function Header({}: Props) {
  return (
    <header className='flex sticky top-0 items-start xl:items-center justify-between max-w-6xl mx-auto p-5 z-20'>
      <motion.div
      initial={{
        x:-500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1 
      }}
      transition={{
        duration:1.5,
      }}
      className="flex flex-row items-center">
      <SocialIcon url="https://twitter.com/@DavidMwas2_0" 
       fgColor="cyan"
       bgColor='transparent'
      />
      <SocialIcon url="https://github.com/David-mwas" 
       fgColor="cyan"
       bgColor='transparent'
      />
      <SocialIcon url="https://facebook.com/David-mwas" 
       fgColor="cyan"
       bgColor='transparent'
      />
      </motion.div>

      <motion.div 
        initial={{
          x:500,
          opacity:0,
          scale:0.5
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1 
        }}
        transition={{
          duration:1.5,
        }}
      className="flex flex-row items-center cursor-pointer text-gray-300">
      <SocialIcon
      network='email' 
      fgColor="cyan"
      bgColor='transparent'
     />
      <p className='uppercase hidden md:inline-flex tex-gray-400 text-sm'>get in touch</p>
      </motion.div>
    </header>

  )
}