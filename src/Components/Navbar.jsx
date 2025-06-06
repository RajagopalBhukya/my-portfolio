
import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoLockClosedSharp } from "react-icons/io5";
import { motion } from "motion/react";
import { Link } from 'react-scroll';

function Navbar() {
    const varients = {
        open: { clipPath: "circle(1200px at 43px 43px)" },
        transition: {
            type: "spring"
        },
        closed: {
            clipPath: "circle(25px at 43px 43px)",
            transition: {
                type: "spring",
                duration: 1
            }
        }
    };

    const [menu, setMenu] = useState(false);

    const items = [
        { id: 1, text: "About", to: "about" },
        { id: 2, text: "Services", to: "services" },
        { id: 3, text: "Contact", to: "contact" }
    ];
console.log(motion);

    return (
        <>
            <div className='sticky top-0 z-50 bg-[#0e0c1e]'>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='container mx-auto hidden md:flex justify-between items-center py-6'>
                    <div className='text-xl lg:text-2xl font-bold flex items-center gap-1'>
                        <span className='text-white'>Spyder</span>
                        <span className='text-purple-500'>Web</span>
                    </div>

                    <div>
                        <ul className='hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white cursor-pointer'>
                            {items.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Desktop CV Download Button */}
                    <a
                        href="/my-portfolio/Resume.bhukya.pdf"
                        className='md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full'
                        download
                    >
                        Download CV
                    </a>
                </motion.div>

                <div className='flex md:hidden justify-between'>
                    <motion.div animate={menu ? "open" : "closed"}>
                        <motion.div
                            variants={varients}
                            className='bg-white w-2/3 h-screen text-black fixed z-10'>
                            <div className='px-7 py-6'>
                                {/* Menu Toggle Button */}
                                <div onClick={() => setMenu(prev => !prev)}>
                                    {menu ? (<IoLockClosedSharp size={30} />) : (<IoMdMenu size={30} />)}
                                </div>
                            </div>

                            {menu && (
                                <div className='flex flex-col justify-center items-center'>
                                    <ul className='space-y-6 text-black text-lg cursor-pointer'>
                                        {items.map((item) => (
                                            <li
                                                key={item.id}
                                                className='hover:text-purple-500 cursor-pointer duration-200'>
                                                <Link
                                                    to={item.to}
                                                    smooth={true}
                                                    duration={500}
                                                    offset={-70}
                                                    onClick={() => setMenu(false)} // Close menu on link click
                                                >
                                                    {item.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Mobile CV Download Button */}
                                    <a
                                        href="/my-portfolio/Resume.bhukya.pdf"
                                        className='text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 mt-6 rounded-full'
                                        download
                                        onClick={() => setMenu(false)} // Close menu after CV download
                                    >
                                        Download CV
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Logo for mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, y: -100 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-xl font-bold flex items-center gap-2 py-6 px-4'>
                        <span className='text-white'>Spyder</span>
                        <span className='text-purple-500'>Web</span>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
