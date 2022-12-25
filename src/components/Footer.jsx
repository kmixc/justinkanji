import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <div className='flex justify-around items-center h-56 text-green-700 lg:text-xl sm:text-sm font-bold'>
                <Link className='hover:text-black transition duration-300 bot-footer-link' to="/">home.</Link>
                <Link className='hover:text-black transition duration-300 bot-footer-link' to="/about">about.</Link>
                <Link className='hover:text-black transition duration-300 bot-footer-link' to="/portfolio">portfolio.</Link>
                <Link className='hover:text-black transition duration-300 bot-footer-link' to="/resume">resume.</Link>
                <Link className='hover:text-black transition duration-300 bot-footer-link' to="/contact">contact.</Link>
            </div>
        </div>
    )
}
