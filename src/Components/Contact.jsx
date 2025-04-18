import React from 'react';
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram,  FaGithub } from 'react-icons/fa';


export  function Contact() {


    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.2});
    console.log(ref, inView);
    
    console.log(motion, useInView);
    
    return (
        <>
      

            <div id='contact' className="text-white  px-4 text-center">
                <motion.h1
                ref={ref}
                initial = {{opacity:0, y:-100}}
                animate = {inView ? {opacity:1, y:0} : {}}
                transition={{delay:0.5, duration:0.5}}
                 className="text-3xl md:text-4xl font-bold underline">Contact</motion.h1>      
            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>

                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10 md:grid-cols-2 md:gap-x-40 md:mx-3 lg:grid-cols-4 lg:gap-x-80 lg:mx-20'>

                    <motion.div 
                     ref={ref}
                     initial = {{opacity:0, y:-100}}
                     animate = {inView ? {opacity:1, y:0} : {}}
                     transition={{delay:0.5, duration:0.5}}

                    className='flex items-center space-x-4'>
                        <div className='bg-purple-500 p-4 rounded-full'>
                            <FaPhone className='text-white w-6 h-6'/> 
                        </div>
                        <div>
                            <p className='text-lg font-medium text-purple-500'>call me</p>
                            <p  className='text-white '>+919381115918</p>
                        </div>
                    </motion.div>

                    <motion.div 
                       ref={ref}
                       initial = {{opacity:0, y:-100}}
                       animate = {inView ? {opacity:1, y:0} : {}}
                       transition={{delay:0.5, duration:0.5}} 
                    className='flex items-center space-x-4'>
                        <div className='bg-purple-500 p-4 rounded-full'>
                            <FaEnvelope className='text-white w-6 h-6'/> 
                        </div>
                        <div>
                            <p className='text-lg font-medium text-purple-500'>e-mail</p>
                            <p  className='text-white '>bhukyarajgopal5@gmail.com</p>
                        </div>
                    </motion.div>

            

                    <motion.div 
                    ref={ref}
                    initial = {{opacity:0, y:-100}}
                    animate = {inView ? {opacity:1, y:0} : {}}
                    transition={{delay:0.5, duration:0.5}}
                     className='flex items-center space-x-4'>
                        <div className='bg-purple-500 p-4 rounded-full'>
                            <FaLinkedin className='text-white w-6 h-6'/> 
                        </div>
                        <div>
                            <p className='text-lg font-medium text-purple-500'><a href="https://www.linkedin.com/in/rajagopal-bhukya-a37b66243/">Linkdin 
                            </a></p>
                            
                        </div>
                    </motion.div>

                    <motion.div 
                       ref={ref}
                       initial = {{opacity:0, y:-100}}
                       animate = {inView ? {opacity:1, y:0} : {}}
                       transition={{delay:0.5, duration:0.5}} 
                     className='flex items-center space-x-4'>
                        <div className='bg-purple-500 p-4 rounded-full'>
                            <FaInstagram className='text-white w-6 h-6'/> 
                        </div>
                        <div>
                            <p className='text-lg font-medium text-purple-500'> <a href="">Instgram</a></p>
                           
                        </div>
                    </motion.div>

                </div>

            </div>
            {/* {footer} */}
                <div className='mt-20 flex justify-between items-center p-5 text-white border-2 border-purple-500'>
                   
                    <p>© 2022.All Rights Reserved</p>
                    <p>Spyder Web</p>
                   
                    <div className='flex justify-center space-x-4 text-white mt-4'>
                        <a className='hover:text-purple-500' href="https://www.linkedin.com/in/rajagopal-bhukya-a37b66243/">< FaLinkedin className='w-6 h-6'/></a>
                        <a className='hover:text-purple-500' href="https://www.instagram.com/rajagopalbhukya/"><FaInstagram  className='w-6 h-6'/></a>
                        <a className='hover:text-purple-500'  href="https://github.com/RajagopalBhukya"><FaGithub  className='w-6 h-6'/></a>
                    </div>
                    
                </div>

            
        </>
    );
}

