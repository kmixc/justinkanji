import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <div className='flex justify-around items-center h-44 text-green-700 text-xl font-bold'>
                <Link className='hover:text-black transition duration-300' to="/">home.</Link>
                <Link className='hover:text-black transition duration-300' to="/about">about.</Link>
                <Link className='hover:text-black transition duration-300' to="/portfolio">portfolio.</Link>
                <Link className='hover:text-black transition duration-300' to="/resume">resume.</Link>
                <Link className='hover:text-black transition duration-300' to="/contact">contact.</Link>
            </div>
        </div>
    )
}
