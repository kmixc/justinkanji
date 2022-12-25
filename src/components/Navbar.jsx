import React from 'react'
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"
import { FaBars, FaTimes } from "react-icons/fa"
import { useRef } from 'react';

export default function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <div className='bg-green-700 pt-12'>
            <header className='bg-green-200 text-black font-bold flex lg:justify-around md:justify-end sm:justify-end max-sm:justify-end h-24 text-3xl'>
                <nav ref={navRef}>
                    <a className='px-10 hover:text-white hover:drop-shadow-xl transition duration-300' href="/about">about.</a>
                    <a className='px-10 hover:text-white hover:drop-shadow-xl transition duration-300' href="/portfolio">portfolio.</a>
                    <a className='px-5 hover:text-cyan-500 scale hover:drop-shadow-xl transition duration-300 sm:text-6xl max-sm:text-6xl mt-2' href="/">JFK</a>
                    <a className='px-10 hover:text-white hover:drop-shadow-xl transition duration-300' href="/resume">resume.</a>
                    <a className='px-10 hover:text-white hover:drop-shadow-xl transition duration-300' href="/contact">contact.</a>
                    <button className='nav-btn nav-close-btn lg:hidden md:flex sm:flex' onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className='nav-btn lg:hidden md:flex sm:flex' onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
            <div>
                <div className='bg-green-700 h-96 lg:px-44 sm:px-20 max-sm:px-10 pt-28 font-extrabold'>
                    <h2 className='text-black lg:text-6xl sm:text-6xl max-sm:text-5xl p-2 font-extrabold'>justin kanji.</h2>
                    <div className='lg:pl-32 sm:pl-20 max-sm:pl-5 lg:text-5xl text-center sm:text-4xl max-sm:text-3xl'>
                        <div className='flex flex-wrap font-extrabold'>
                            <p className='text-white'>UX/UI Designer</p>
                            <span className='text-black'>.</span>
                        </div>
                        <div className='flex flex-wrap font-extrabold'>
                            <p className='text-white'>Critical thinker</p>
                            <span className='text-black'>.</span>
                        </div>
                        <div className='flex flex-wrap font-extrabold'>
                            <p className='text-white'>And so much more</p>
                            <span className='text-black'>...</span>
                        </div>
                    </div>
                </div>
                <div className='flex text-white lg:justify-end pb-24 lg:pr-24 sm:justify-center max-sm:justify-center max-sm:text-xs'>
                    <a href='#'>
                        <AiFillLinkedin className='social-link mx-2 hover:text-cyan-500 transition duration-300' size={"4em"} />
                    </a>
                    <a href='#'>
                        <AiFillYoutube className='social-link mx-2 hover:text-cyan-500 transition duration-300' size={"4em"} />
                    </a>
                    <a href='#'>
                        <AiFillInstagram className='social-link mx-2 hover:text-cyan-500 transition duration-300' size={"4em"} />
                    </a>
                    <a href='#'>
                        <AiOutlineTwitter className='social-link mx-2 hover:text-cyan-500 transition duration-300' size={"4em"} />
                    </a>
                </div>
            </div>
        </div>
    )
}
