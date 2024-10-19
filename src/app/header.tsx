"use client"

import React, { useState } from 'react'

export default function Header(){
    const [open, setOpen] = useState(false);

    const navbar = () => {
         setOpen(open => !open);       
    }    

    return (
        <header className="container px-12 md:px-24">
            <nav className="flex flex-col md:flex-row md:items-center md:justify-between mx-auto">
                <div className="flex">
                    <a className="py-4 text-black text-2xl font-bold mr-auto">nandaditra</a>
                    <div className="ml-auto md:hidden py-4" onClick={navbar}>
                        <span className="material-icons-outlined text-black focus:outline-none focus:ring focus:ring-sky-300">
                            menu
                        </span>
                    </div>
                </div>

                { !open ? "" :
                   <div className="md:ml-auto md:block font-medium">
                        <ul className="flex flex-col md:flex-row">
                            <li className="py-3 md:py-7 md:px-4 hover:text-black text-black hover:font-bold">Home</li>
                            <li className="py-3 md:py-7 md:px-4 hover:text-black text-black hover:font-bold">Experience</li>
                            <li className="py-3 md:py-7 md:px-4 hover:text-black text-black hover:font-bold">Project</li>
                            <li className="py-3 md:py-7 md:px-4 hover:text-black text-black hover:font-bold">Blog</li>
                        </ul>
                   </div>
                }
                 
                <div className="md:ml-auto hidden md:block font-semibold">
                  <ul className="flex flex-col md:flex-row">
                    <li className="py-3 md:py-7 md:px-4 hover:text-black text-black hover:font-bold">Home</li>
                    <li className="py-3 md:py-7 md:px-4 hover:text-black text-black hover:font-bold">Experience</li>
                    <li className="py-3 md:py-7 md:px-4 hover:text-black text-black hover:font-bold">Project</li>
                    <li className="py-3 md:py-7 md:px-4 hover:text-black text-black hover:font-bold">Blog</li>
                  </ul>
                </div>
            </nav>
        </header>
    )
}