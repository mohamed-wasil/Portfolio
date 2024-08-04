
import React from 'react'
import contactCss from "./contact.module.css"
import Image from 'next/image'
import Link from 'next/link'
import {  AddLocation, Email, Facebook, Instagram, LinkedIn, LocalPhone } from '@mui/icons-material'
import Mouse from '@/app/(components)/Mouse/Mouse'
import { Helmet } from 'react-helmet'

export default function page() {
    return <>

        <div className={contactCss.page}>

            <Mouse />

            <div className={contactCss.squares}>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>

                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>

                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>

                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>

                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>

                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>

                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>

                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>

                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>

                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
                <div className={contactCss.square}></div>
            </div>

            <div className={contactCss.cricle_left}></div>
            <div className={contactCss.cricle_right}></div>

            <div className={contactCss.wrapper}>
                <div className={contactCss.shine}></div>
                <div className={contactCss.line_1}></div>
            </div>

            <div className="container xl:px-28 mx-auto">
                <div className={"h-full px-3 " + contactCss.row} >
                    <div className={contactCss.col_left}>
                        <div className={contactCss.box_text}>

                            <div className={contactCss.image}>
                                <Image className='w-full' src={require('../../images/118b6aa3-3076-4952-af58-422b82174d33.jpg')} alt='contact' />
                            </div>

                            <h2>Contact me</h2>
                            <span className={contactCss.desc}>
                                You can send whatever you want. All you have to do is fill out the fields and press the send button, and I will respond to you as soon as possible.
                            </span>
                        </div>
                        <div className={contactCss.box_icon}>
                            <ul>
                                <li><i><LocalPhone /></i> <span>+20 1221965830</span></li>
                                <li><i><Email /></i> <span>wasilmohamed011@gmail.com</span></li>
                                <li><i><AddLocation /></i> <span>Egypt, Cairo</span></li>
                            </ul>
                            <div className={contactCss.social_media}>

                                <Link href="https://www.facebook.com/profile.php?id=61553792166351&mibextid=ZbWKwL"><Facebook /></Link>
                                <Link href="https://www.instagram.com/mohamed__wasil?igsh=MWxxMnhud2FvcHR0OQ=="><Instagram /></Link>
                                <Link href="https://www.linkedin.com/in/mohamed-wasil-69920b318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedIn /></Link>

                            </div>
                        </div>

                    </div>

                    <div className={contactCss.col_right}>
                        <div className={contactCss.destance}></div>

                        <form className={contactCss.box} action="https://formsubmit.co/wasilmohaemd011@email.com" method="POST" >
                            <div className={contactCss.inps}>
                                <input type="text" placeholder="First name" />
                                <input type="text" placeholder="Last name" />
                            </div>
                            <div className={contactCss.inp}><input type="email" placeholder='Your email' /></div>
                            <div className={contactCss.inp}><textarea placeholder='Message'></textarea></div>

                            <button className={contactCss.btn} type='submit'>Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            <div className={contactCss.line_2}></div>

        </div>

    </>
}
