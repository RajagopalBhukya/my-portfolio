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
                    Here are my details — feel free to go through them and contact me if you need any website or customized 
                    web applications. I'm also available for freelance projects — feel free to reach out! 
                    </motion.p>

                    <div className='flex flex-col md:flex-row justify-center items-center'>
                        <motion.div
                         initial = {{opacity:0, x:-100}}
                         animate = {iniView? {}:{opacity:1, x:0}}
                         transition={{delay:0.6, duration:0.5}}
                         className='mb-8 md:mb-0 md:mr-8 flex justify-center'>

                            <img    
                             src='/aboutImg.jpeg' alt="loading" className='mx-auto w-2/3 md:w-1/3 rounded-full  w-2/3  sm:w-1/2  md:w-8/12 md:h-80 object-cover' />
                        </motion.div>
                        <motion.p 
                           initial = {{opacity:0, x:100}}
                           animate = {iniView? {}:{opacity:1, x:0}}
                           transition={{delay:0.8, duration:0.5}}
                        className='md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl'>Hey, There I'm Rajagopal — a dedicated Full Stack Web Developer with a passion for building websites and web applications from start to finish.
                            I enjoy turning ideas into real, user-friendly digital solutions. With a focus on both front-end design and back-end development, I aim to create
                             smooth, responsive, and impactful experiences for users. I'm always excited to solve problems, learn new technologies, and collaborate on meaningful 
                             projects. Let’s work together to bring your ideas to life!
                        </motion.p>
                    </div>
                    
                    <div className='flex flex-col sm:flex-row justify-center mt-12 space-y-6 sm:space-y-0 sm:space-x-40'>

                            <motion.div initial = {{opacity:0}}
                                        animate = {iniView? {}:{opacity:1}}
                                        transition={{delay:1.2, duration:0.3}}
                             className='text-center'>
                                <h3 
                                className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>1+</h3>
                                <motion.p  initial = {{opacity:0, y:100}}
                                            animate = {iniView? {}:{opacity:1, y:0}}
                                            transition={{delay:1.7, duration:0.5}}
                                  className='text-sm sm:text-base text-gray-300'>Year of Hands on experience Experience on Web Development</motion.p>
                            </motion.div>

                            <motion.div initial = {{opacity:0}}
                                        animate = {iniView? {}:{opacity:1}}
                                        transition={{delay:1.2, duration:0.3}} className='text-center'>
                                <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>4+</h3>
                                <motion.p  initial = {{opacity:0, y:100}}
                                            animate = {iniView? {}:{opacity:1, y:0}}
                                            transition={{delay:1.7, duration:0.5}}
                                 className='text-sm sm:text-base text-gray-300'>Front-End Projects I have Made</motion.p>
                            </motion.div>

                    </div>

                    
                   
                </div>
            
            </div>
        </>
    );
}

