import React from 'react';

import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export  function About() {
    

    const {ref, inView} = useInView({triggerOnce: true, threshold: 0.2});
        // console.log(ref);
        
    
    return (
        <>
            <div id='about' ref = {ref} className='text-white py-16'>
                <div className='container mx-auto px-4 text-center' motion = {motion}>

                    <motion.h2 
                    initial = {{opacity:0, y:100}}
                    animate = {inView? {opacity:1, y:0} : {}}
                    transition={{delay:0.3, duration:0.5}}
                    className='text-3xl md:text-4xl font-bold mb-8 underline'>About Me</motion.h2 >
                    <motion.p 
                    initial = {{opacity:0, y:100}}
                    animate = {inView?{opacity:1, y:0} : {}}
                    transition={{delay:0.5, duration:0.5}}
                    className='mb-12 text-gray-400 text-center mt-10'>Java Full Stack Developer focused on building scalable, responsive, and user-centric web applications using React.js, Spring Boot, MySQL, and REST APIs. Passionate about creating clean UI experiences, optimized backend systems, and real-world business solutions through modern web technologies. 
                    </motion.p>

                    <div className='flex flex-col md:flex-row justify-center items-center'>
                        <motion.div
                         initial = {{opacity:0, x:-100}}
                         animate = {inView? {opacity:1, x:0}: {}}
                         transition={{delay:0.6, duration:0.5}}
                         className='mb-8 md:mb-0 md:mr-8 flex justify-center'>

                            <img    
                             src='/my-portfolio/aboutImg.jpeg' alt="loading" className='mx-auto  rounded-full  w-2/3  sm:w-1/2  md:w-8/12 md:h-80 object-cover' />
                        </motion.div>
                        <motion.p 
                           initial = {{opacity:0, x:100}}
                           animate = {inView? {opacity:1, x:0} : {}}
                           transition={{delay:0.8, duration:0.5}}
                        className='md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl'>I'm a Java Full Stack Developer with practical experience in designing and developing modern web applications using React.js, Spring Boot, MySQL, and RESTful APIs. I specialize in building responsive frontend interfaces, secure backend services, and maintainable application architectures.

My development experience includes authentication systems, API integration, frontend state management, database optimization, and scalable UI design. I have worked on projects such as HRMS platforms, real-time chat applications, booking systems, and interactive browser-based applications.

I continuously explore new technologies and development practices to improve application performance, scalability, and user experience.
                        </motion.p>
                    </div>
                    
                    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-14 mt-12 text-center'>

                            <motion.div initial = {{opacity:0}}
                                        animate = {inView? {opacity:1} : {}}
                                        transition={{delay:1.2, duration:0.3}}
                             className='text-center px-4'>
                                <h4
                                className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold my-4 text-purple-500 break-words'>2+</h4>
                                <motion.p  initial = {{opacity:0, y:100}}
                                            animate = {inView? {opacity:1, y:0} : {}}
                                            transition={{delay:1.7, duration:0.5}}
                                  className='text-sm sm:text-base text-gray-300'>Years of Hands-on Experience in Full Stack Web Development</motion.p>
                            </motion.div>

                            <motion.div initial = {{opacity:0}}
                                        animate = {inView? {opacity:1} : {}}
                                        transition={{delay:1.2, duration:0.3}} className='text-center px-4'>
                                <h4 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold my-4 text-purple-500 break-words'>5+</h4>
                                <motion.p  initial = {{opacity:0, y:100}}
                                            animate = {inView? {opacity:1, y:0} : {}}
                                            transition={{delay:1.7, duration:0.5}}
                                 className='text-sm sm:text-base text-gray-300'>Full Stack & Frontend Projects Developed</motion.p>
                            </motion.div>

                             <motion.div initial = {{opacity:0}}
                                        animate = {inView? {opacity:1} : {}}
                                        transition={{delay:1.2, duration:0.3}} className='text-center px-4'>
                                <h4 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold my-4 text-purple-500 break-words'>10+</h4>
                                <motion.p  initial = {{opacity:0, y:100}}
                                            animate = {inView? {opacity:1, y:0} : {}}
                                            transition={{delay:1.7, duration:0.5}}
                                 className='text-sm sm:text-base text-gray-300'>Technologies & Tools Used Across Development</motion.p>
                            </motion.div>

                              <motion.div initial = {{opacity:0}}
                                        animate = {inView? {opacity:1} : {}}
                                        transition={{delay:1.2, duration:0.3}} className='text-center px-4'>
                                <h4 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold my-4 text-purple-500 break-words'>100%</h4>
                                <motion.p  initial = {{opacity:0, y:100}}
                                            animate = {inView? {opacity:1, y:0} : {}}
                                            transition={{delay:1.7, duration:0.5}}
                                 className='text-sm sm:text-base text-gray-300'>Focus on Responsive and Scalable Applications</motion.p>
                            </motion.div>

                    </div>

                    
                   
                </div>
            
            </div>
        </>
    );
}

