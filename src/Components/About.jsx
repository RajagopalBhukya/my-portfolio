import React from 'react';

import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export  function About() {
    console.log(motion);

    const {ref, iniView} = useInView({triggerOnce: true, threshold: 0.2});
        console.log(ref);
        
    
    return (
        <>
            <div id='about' className='text-white py-16'>
                <div className='container mx-auto px-4 text-center'>

                    <motion.h2 
                    initial = {{opacity:0, y:100}}
                    animate = {iniView? {}:{opacity:1, y:0}}
                    transition={{delay:0.3, duration:0.5}}
                    className='text-3xl md:text-4xl font-bold mb-8 underline'>About Me</motion.h2 >
                    <motion.p 
                    initial = {{opacity:0, y:100}}
                    animate = {iniView? {}:{opacity:1, y:0}}
                    transition={{delay:0.5, duration:0.5}}
                    className='mb-12 text-gray-400 text-center mt-10'> Hello everyone! Please go and visit my profile. 
                    Here are my details - feel free to go through them and contact me if you need any website or customized 
                    web applications. I'm also available for freelance projects — feel free to reach out! 
                    </motion.p>

                    <div className='flex flex-col md:flex-row justify-center items-center'>
                        <motion.div
                         initial = {{opacity:0, x:-100}}
                         animate = {iniView? {}:{opacity:1, x:0}}
                         transition={{delay:0.6, duration:0.5}}
                         className='mb-8 md:mb-0 md:mr-8 flex justify-center'>

                            <img    
                             src='/my-portfolio/aboutImg.jpeg' alt="loading" className='mx-auto w-2/3 md:w-1/3 rounded-full  w-2/3  sm:w-1/2  md:w-8/12 md:h-80 object-cover' />
                        </motion.div>
                        <motion.p 
                           initial = {{opacity:0, x:100}}
                           animate = {iniView? {}:{opacity:1, x:0}}
                           transition={{delay:0.8, duration:0.5}}
                        className='md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl'>I'm a passionate Java Full Stack Developer with hands-on experience in building modern web applications using React.js, Spring Boot, MySQL, 
                        and REST APIs. I specialize in developing responsive frontend interfaces, scalable backend systems, and efficient database architectures.

                        I have worked on projects including HRMS platforms, chat applications, booking systems, and browser-based interactive applications. My experience includes API integration, authentication systems, debugging, query optimization, and frontend state management using React Hooks and Redux.

                        I enjoy transforming ideas into practical digital solutions while continuously learning new technologies and improving development workflows. I’m also open to freelance opportunities and collaborative projects.
                        </motion.p>
                    </div>
                    
                    <div className='flex flex-col sm:flex-row justify-center mt-12 space-y-6 sm:space-y-0 sm:space-x-40'>

                            <motion.div initial = {{opacity:0}}
                                        animate = {iniView? {}:{opacity:1}}
                                        transition={{delay:1.2, duration:0.3}}
                             className='text-center'>
                                <h4
                                className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>2+</h4>
                                <motion.p  initial = {{opacity:0, y:100}}
                                            animate = {iniView? {}:{opacity:1, y:0}}
                                            transition={{delay:1.7, duration:0.5}}
                                  className='text-sm sm:text-base text-gray-300'>Years of Hands-on Experience in Full Stack Web Development</motion.p>
                            </motion.div>

                            <motion.div initial = {{opacity:0}}
                                        animate = {iniView? {}:{opacity:1}}
                                        transition={{delay:1.2, duration:0.3}} className='text-center'>
                                <h4 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>5+</h4>
                                <motion.p  initial = {{opacity:0, y:100}}
                                            animate = {iniView? {}:{opacity:1, y:0}}
                                            transition={{delay:1.7, duration:0.5}}
                                 className='text-sm sm:text-base text-gray-300'>Full Stack & Frontend Projects Developed</motion.p>
                            </motion.div>

                             <motion.div initial = {{opacity:0}}
                                        animate = {iniView? {}:{opacity:1}}
                                        transition={{delay:1.2, duration:0.3}} className='text-center'>
                                <h4 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>10+</h4>
                                <motion.p  initial = {{opacity:0, y:100}}
                                            animate = {iniView? {}:{opacity:1, y:0}}
                                            transition={{delay:1.7, duration:0.5}}
                                 className='text-sm sm:text-base text-gray-300'>Technologies & Tools Used Across Development</motion.p>
                            </motion.div>

                              <motion.div initial = {{opacity:0}}
                                        animate = {iniView? {}:{opacity:1}}
                                        transition={{delay:1.2, duration:0.3}} className='text-center'>
                                <h4 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>100%</h4>
                                <motion.p  initial = {{opacity:0, y:100}}
                                            animate = {iniView? {}:{opacity:1, y:0}}
                                            transition={{delay:1.7, duration:0.5}}
                                 className='text-sm sm:text-base text-gray-300'>Focus on Responsive and Scalable Applications</motion.p>
                            </motion.div>

                    </div>

                    
                   
                </div>
            
            </div>
        </>
    );
}

