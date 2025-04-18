
import React from 'react';
import { FaAppStore } from 'react-icons/fa';
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';


export function Services() {
    const servicesData =[ {
        title: "Web Development",
        description:"I build responsive and user-friendly websites using modern front-end tools like HTML, CSS, JavaScript, and React, combined with powerful back-end development using Java Spring Boot and MySQL. I focus on delivering fast, secure, and accessible full-stack solutions that meet real-world needs."
    },
    {
        title: "Software Development",
        description:"I design and develop reliable software solutions tailored to business needs. From building desktop and web applications to integrating databases and APIs, I focus on writing clean, efficient, and maintainable code. Using Java, Spring Boot, and modern tools, I ensure scalable and secure solutions that solve real-world problems effectively."
    },
    {
        title: "Data Base Developmemnt",
        description:"I design and manage efficient, secure, and scalable databases to support modern applications. Using MySQL and other relational database systems, I focus on data modeling, normalization, and query optimization to ensure high performance. I integrate databases seamlessly with backend systems like Java Spring Boot, ensuring data integrity and smooth application functionality."
    },
    {
        title: "Python Development",
        description:"I have a foundational understanding of Python, with experience in file handling and basic concepts of web development using Django. I'm continuously learning and building my skills to create simple scripts and backend functionality, with a focus on writing clean and readable code."
    }
]

        const [ref, inView] = useInView({triggerOnce: true, threshold: 0.2});

            console.log(ref);
            console.log(servicesData, motion, useInView, inView);

    
    return (
        <>
                <div id='services' className='text-white py-16'>
                    <motion.div 
                        ref={ref}
                        initial = {{opacity:0 , y:50}}
                        animate={inView? { opacity: 1, y: 0 } : {}}
                        transition={{duration:0.5}}
                     className='container mx-auto px-4 text-center'>
                        <h2 className='text-3xl md:text-4xl font-bold underline mb-12'>Services</h2>
                        <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                            {servicesData.map((item, index)=>(
                                <motion.div  
                                ref={ref}
                                initial = {{opacity:0 , scale:0.8}}
                                animate= {inView ? {opacity:1, scale:1} : {}}
                                transition={{duration:0.5, delay:index*0.2}}
                                className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-300'
                                key={index}>
                                    <div className=''>
                                    <FaAppStore className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto'/>
                                    <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>{item.title}</h3>
                                    </div>
                                    <p className='text-sm sm:text-base lg:text-lg text-gray-200'>{item.description}</p>
                                </motion.div>
                              
                            ))}
                        </div>
                    </motion.div>
                </div>
        </>
    );
}

