"use client"

import React, { useState } from 'react'
import Navigation from '../Navigation';

export default function Header(){
    const [open, setOpen] = useState<boolean>(false);

    const navbar = () => {
         setOpen(open => !open);       
    }    

    return (
        <div className="container mx-auto px-12 md:px-24">
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
                            <Navigation link="/" title_nav="Home"/>
                            <Navigation link="#experience" title_nav="Experience" />
                            <Navigation link="#project" title_nav="Project" />
                            <Navigation link="/blog" title_nav="Blog" />
                        </ul>
                   </div>
                }
                 
                <div className="md:ml-auto hidden md:block font-semibold">
                  <ul className="flex flex-col md:flex-row">
                    <Navigation link="/" title_nav="Home"/>
                    <Navigation link="#experience" title_nav="Experience" />
                    <Navigation link="#project" title_nav="Project" />
                    <Navigation link="/blog" title_nav="Blog" />
                  </ul>
                </div>
            </nav>
        </div>
    )
}