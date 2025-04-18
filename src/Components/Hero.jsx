import React from 'react';
import {motion} from "framer-motion";
import { Link } from 'react-scroll';
export function Hero() {

   console.log(motion);
   
    return (
       <>
            <div className='text-white py-10'>

                 <motion.img 
                    initial ={{opacity : 0, scale:0}}
                    animate = {{opacity: 1, scale: 1}}
                    transition={{
                        delay:0.5,
                        duration:0.5
                    }}
                   src='/my-portfolio/Mygibli.png' alt="Not Found"  className='mx-auto w-2/3 md:w-1/3 rounded-full   h-[580px] object-cover'/>

                     <motion.div 
                         initial ={{opacity : 0}}
                         animate = {{opacity: 1}}
                         transition={{
                                    delay:0.5,
                                    duration:0.5}}

                     className='container mx-auto text-center'>
                        <motion.h1   initial ={{opacity :0, y:100}}
                         animate = {{opacity: 1, y:0}}
                         transition={{
                                     delay:1,
                                    duration:0.5}}

                        className='text-4xl md:text-5xl flex flex-col gap-4 font-bold' 
                        >My Story, My Way
                        <span className='text-purple-500 m-8'>Welcome to Rajagopal's Portfolio</span>
                        </motion.h1>
                             
                            <motion.p    
                            initial ={{opacity :0, y:100}}
                            animate = {{opacity: 1, y:0}}
                            transition={{
                                            delay:1.2,
                                            duration:0.5}}

                            className='text-gray-400 text-lg mb-8'>Hi, I'm Rajagopal. Here's my work!</motion.p>

                            <div className='flex justify-center space-x-4 mb-10'>
                                <motion.button 
                                    initial ={{opacity :0, x:-100}}
                                    animate = {{opacity: 1, x:0}}
                                    transition={{
                                                    delay:1.5,
                                                    duration:0.5}}
                                className='bg-purple-500 text-white px-6 py-6 rounded-full'>
                                    <Link to='contact'
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    >Hire Me</Link> 
                                    </motion.button>

                                    <motion.button
                                     initial ={{opacity :0, x:100}}
                                     animate = {{opacity: 1, x:0}}
                                     transition={{
                                                     delay:1.5,
                                                     duration:0.5}}
                                     className='text-white border border-white px-6 py-3 rounded-full '><Link to='about'
                                     smooth={true}
                                     duration={500}
                                     offset={-70}
                                     >My Story</Link> </motion.button>
                            </div>
                    </motion.div>
       
             </div>
       </>
    );
}

