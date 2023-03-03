import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function BackGroundCircles({}: Props) {
  return (
     <motion.div
      initial={{
        opacity:0,
        }}
      animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.3,0.4,0.1,0.2],
      }}
      transition={{
      duration:2.5,
      }}
     className="relative flex items-center justify-center text-center">
    {/* <div className="absolute border border-[#777777] rounded-full h-[200px] w-[200px] mt-52 animate-ping"/> */}
    {/* <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 "/> */}
    {/* <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52"/> */}
    <div  className="absolute border border-purple-500 opacity-500 rounded-full h-[550px] w-[550px] mt-52 animate-pulse "/>
    <div className="absolute border border-grey-300 opacity-500 rounded-full h-[550px] w-[550px] mt-52 animate-pulse "/>
 </motion.div>
  )
}

export default BackGroundCircles