"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import navbarCss from './navbar.module.css'
import Image from 'next/image'
import { useLocation, useNavigate } from 'react-router-dom'
import { List, ListItem } from '@mui/material'
import { usePathname } from 'next/navigation'
import { BurstMode, Call, FolderShared, Home, Lightbulb, RoundaboutRight } from '@mui/icons-material'


export default function Navbar() {

    // const location: any = useLocation();
    // const navigation: any = useNavigate();
    const pathName: any = usePathname()


    useEffect(() => {


        // document.querySelector('.specialClass')?.classList.add("active")
        // const list = document.querySelectorAll("#list")

        // document.querySelectorAll('#list').forEach((list) => {

        //     list.addEventListener("click", function () {

        //         document.querySelectorAll('#list').forEach((list2) => {
        //             list2.classList.remove("active")
        //         })
        //         list.classList.add("active")
        //         // console.log("done");
        //     })
        // })

    }, [])




    return <>

        <header className={" flex items-center " + navbarCss.navbar}>
            <nav className='w-full container mx-auto xl:px-28'>
                <div className="flex justify-between ">
                    <div className={navbarCss.logo}>
                        <div className={navbarCss.profile_logo}>
                            <Image className='w-full inline-block me-3' src={require("../../profile_logo.jpg")} alt='profile_logo' />
                        </div>
                        {/* <img src={require("../../profile_image.jpg")} alt="profile_logo" /> */}
                        <Link href='/home'>Portfo<span>lio</span></Link>
                    </div>


                    <div className={navbarCss.list_right}>
                        <ul className={'flex justify-center ' + navbarCss.list}>
                            <li id='list' className={pathName == "/home" || pathName == "/" ? navbarCss.active : " " + navbarCss.links + " specialClass "}><Link href='/home'>Home</Link></li>
                            <li id='list' className={pathName == "/about" ? navbarCss.active : " " + navbarCss.links}><Link href='/about'>About</Link></li>
                            <li id='list' className={pathName == "/projects" ? navbarCss.active : " " + navbarCss.links}><Link href='/projects'>projects</Link></li>
                            <li id='list' className={pathName == "/skills" ? navbarCss.active : " " + navbarCss.links}><Link href='/skills'>Skills</Link></li>
                            <li id='list' className={pathName == "/contact" ? navbarCss.active : " " + navbarCss.links}><Link href='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <nav className={navbarCss.links_mobile}>
            <Link href='/home' className={pathName == "/home" || pathName == "/" ? navbarCss.active : " " +navbarCss.Links}> <i><Home /></i> <span>Home</span> </Link>
            <Link href='/about' className={pathName == "/about" ? navbarCss.active : " " +navbarCss.Links}> <i><RoundaboutRight /></i> <span>About</span> </Link>
            <Link href='/projects' className={pathName == "/projects" ? navbarCss.active : " " +navbarCss.Links}> <i><BurstMode /></i> <span>Projects</span> </Link>
            <Link href='/skills' className={pathName == "/skills" ? navbarCss.active : " " +navbarCss.Links}> <i><Lightbulb /></i> <span>Skills</span> </Link>
            <Link href='/contact' className={pathName == "/contact" ? navbarCss.active : " " +navbarCss.Links}> <i><Call /></i> <span>Contact</span> </Link>
        </nav>
    </>
}
