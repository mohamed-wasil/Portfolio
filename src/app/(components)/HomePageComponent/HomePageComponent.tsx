"use client"
import React, { use, useEffect } from 'react'
import homeCss from "./home.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { AccountCircle, FolderShared } from '@mui/icons-material'
import Mouse from '@/app/(components)/Mouse/Mouse'
export default function HomePageComponent() {

    const confetti :number = 10;
    const confetti_peice : number = 13;

    useEffect(() => {
        const homeTitle: any = document.getElementById("homeTitle");
        homeTitle.style.transform = "translateX(0)";
        homeTitle.style.opacity = "1";

        const homeLogo: any = document.getElementById('homeLogo');
        homeLogo.style.scale = "1"

        const homeContent: any = document.getElementById('homeContent');
        homeContent.style.transform = "translateX(0)";
        homeContent.style.opacity = "1";

        const homeBtns: any = document.getElementById('homeBtns');
        homeBtns.style.transform = "translateX(0)";
        homeBtns.style.opacity = "1";

        const homeDownYear: any = document.getElementById('homeDownYear');
        homeDownYear.style.bottom = "50px";
        homeDownYear.style.opacity = "1";

        const homeUpYear: any = document.getElementById('homeUpYear');
        homeUpYear.style.top = "50px";
        homeUpYear.style.opacity = "1";

    }, [])
    return <>
        <div className={homeCss.page}>

            <div className={homeCss.squares}>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>

                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>

                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>

                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>

                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>

                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>

                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>

                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>

                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>

                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
                <div className={homeCss.square}></div>
            </div>

            <div className={homeCss.cricle_left}></div>
            <div className={homeCss.cricle_right}></div>

            <div className={homeCss.wrapper}>
                <div className={homeCss.shine}></div>
                <div className={homeCss.line_1}></div>
            </div>

            <div className=" h-full container mx-auto  xl:px-28">
                <div className={"h-full px-3 " + homeCss.info} >
                    <div className="">

                        <div id='homeLogo' className={homeCss.profile_logo}>
                            <span className='p-2'><Image className='w-full' src={require('../../profile_logo.jpg')} alt="profile_logo" /></span>
                        </div>
                        <h1 id='homeTitle'>
                            mohamed wasil
                            <br />
                            front-end developer
                        </h1>

                        <span id='homeContent' className={homeCss.content}>Hello I Am Front End Developer Using React.Js & Next.Js, And I Am Always Eager To Evolve, Improve My skills, And Acquire New Ones.</span>

                        <div id='homeBtns' className={homeCss.btns}>
                            <Link className={homeCss.btn} href='/projects'><FolderShared /> My Projects </Link>
                            <Link className={homeCss.btn} href='/contact'><AccountCircle /> Contact me </Link>
                        </div>

                        <h2 id='homeDownYear' className={homeCss.homeDownYear}>2024</h2>
                        <h2 id='homeUpYear' className={homeCss.homeUpYear}>2024</h2>

                    </div>
                </div>
            </div>

            <div className={homeCss.line_2}></div>
            <Mouse />
        </div>

    </>
}
