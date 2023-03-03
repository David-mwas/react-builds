import React from 'react'
import BackGroundCircles from './BackGroundCircles'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
type Props = {}

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
       '<David-Mwas/>',
       '<Mwas.2.0/>',
       '<Frontend Software Dev/>',
       '<Happy Hacking!!/>'
      ],
    loop: 0,
    delaySpeed:2000
  })
  return (
   <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-[100px]">
      <BackGroundCircles />
      <img 
      className="relative h-40 w-40 max rounded-full object-cover object-top"
      src="../../mwas.jpg" alt="mepic" />
      <div className="z-20">
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
       software Engineer 
      </h2>
      <h1 className="text-2xl">
        I a'm
      <span className='bolder uppercase text-center text-cyan-900 text-bold-800 text-2xl'> {text}
      <Cursor cursorColor='cyan' /></span>
     </h1>
     <div className="pt-5">
     <button className=" z-100 px-2 py-1 border-[#242424] rounded-full text-sm tracking-widest text-gray-500 transition-all hover:border-cyan-800/40 hover:text-cyan-900/40">About</button> 
     <button className=" z-100 px-2 py-1 border-[#242424] rounded-full text-sm tracking-widest text-gray-500 transition-all hover:border-cyan-800 hover:text-cyan-800/40">Experience</button> 
     <button className=" z-100 px-2 py-1 border-[#242424] rounded-full text-sm tracking-widest text-gray-500 transition-all hover:border-cyan-800 hover:text-cyan-800/40">Skills</button> 
     <button className=" z-100 px-2 py-1 border-[#242424] rounded-full text-sm tracking-widest text-gray-500 transition-all hover:border-cyan-800 hover:text-cyan-800/40">Projects</button> 
    </div>
     </div>
     </div>
    )
}
