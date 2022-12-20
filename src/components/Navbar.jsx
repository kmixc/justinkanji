import React from 'react'
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"



export default function Navbar() {
    return (
        <div className='bg-green-700 pt-12'>
            <div className='bg-green-200 text-black font-bold flex justify-around items-center h-24 text-2xl'>
                <div>
                    <Link className='px-10 hover:text-white hover:drop-shadow-xl transition duration-300' to="/about">about.</Link>
                    <Link className='px-10 hover:text-white hover:drop-shadow-xl transition duration-300' to="/portfolio">portfolio.</Link>
                    <Link className='px-10 hover:text-white hover:drop-shadow-xl transition duration-300' to="/resume">resume.</Link>
                    <Link className='px-10 hover:text-white hover:drop-shadow-xl transition duration-300' to="/contact">contact.</Link>
                </div>
                <p>Logo</p>
            </div>
            <div>
                <div className='bg-green-700 h-96 px-44 pt-32'>
                    <h2 className='text-black text-6xl font-bold p-2'>justin kanji.</h2>
                    <div className='pl-32 text-5xl'>
                        <div className='flex'>
                            <p className='text-white'>UX/UI Designer</p>
                            <span className='text-black'>.</span>
                        </div>
                        <div className='flex'>
                            <p className='text-white'>Critical thinker</p>
                            <span className='text-black'>.</span>
                        </div>
                        <div className='flex'>
                            <p className='text-white'>And so much more</p>
                            <span className='text-black'>...</span>
                        </div>
                    </div>
                </div>
                <div className='flex text-white justify-end pb-24 pr-24'>
                    <a href='#'>
                        <AiFillLinkedin className='mx-2 hover:text-cyan-500 transition duration-300' size={"4em"} />
                    </a>
                    <a href='#'>
                        <AiFillYoutube className='mx-2 hover:text-cyan-500 transition duration-300' size={"4em"} />
                    </a>
                    <a href='#'>
                        <AiFillInstagram className='mx-2 hover:text-cyan-500 transition duration-300' size={"4em"} />
                    </a>
                    <a href='#'>
                        <AiOutlineTwitter className='mx-2 hover:text-cyan-500 transition duration-300' size={"4em"} />
                    </a>
                </div>
            </div>
        </div>
    )
}
