
import React from 'react'
import skillsCss from "./skills.module.css"
import Image from 'next/image'
import Link from 'next/link'
import Mouse from '@/app/(components)/Mouse/Mouse'
import { Helmet } from 'react-helmet'

export default function page() {
    return <>
        <div className={skillsCss.skills}>
            <Mouse />

            <div className={skillsCss.squares}>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>

                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>

                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>

                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>

                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>

                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>

                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>

                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>

                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>

                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>
                <div className={skillsCss.square}></div>

            </div>

            <div className={skillsCss.cricle_left}></div>
            <div className={skillsCss.cricle_right}></div>

            <div className={skillsCss.wrapper}>
                <div className={skillsCss.shine}></div>
                <div className={skillsCss.line_1}></div>
            </div>

            <div className="relative z-30 ">
                <div className={skillsCss.title}>skills & Technologies</div>
                <div className={skillsCss.desc_title}>Using The Latest Tech This World Has To Offer Next.Js React.Js Redux JavaScript TypeScript Tailwind BootStrab Scss Css3 Html5 API ...</div>
            </div>



            <div className="container w-10/12 xl:px-28 mx-auto" >
                <section className={skillsCss.info} >
                    <div className={skillsCss.boxes}>
                        <div className={skillsCss.box}>
                            <span className={skillsCss.border_left}></span>
                            <span className={skillsCss.border_right}></span>
                            <div className={skillsCss.img}>
                                <Image className='w-full' src={require("../../images/download.png")} alt="Nextnode_js" />
                            </div>
                            <div className={skillsCss.name}>Next js</div>
                        </div>

                        <div className={skillsCss.box}>
                            <span className={skillsCss.border_left}></span>
                            <span className={skillsCss.border_right}></span>
                            <div className={skillsCss.img}>
                                <Image className='w-full' src={require("../../images/React.a412182efacff508a328.png")} alt="React" />
                            </div>
                            <div className={skillsCss.name}>React</div>
                        </div>

                        <div className={skillsCss.box}>
                            <span className={skillsCss.border_left}></span>
                            <span className={skillsCss.border_right}></span>
                            <div className={skillsCss.img}>
                                <Image className='w-full' src={require("../../images/Redux.8dff9455176a6208f4e8.png")} alt="redux" />
                            </div>
                            <div className={skillsCss.name}>Redux</div>
                        </div>

                        <div className={skillsCss.box}>
                            <span className={skillsCss.border_left}></span>
                            <span className={skillsCss.border_right}></span>
                            <div className={skillsCss.img}>
                                <Image className='w-full' src={require("../../images/BootStrab.ce9eeab967b9edcc126a.png")} alt="bootstrap" />
                            </div>
                            <div className={skillsCss.name}>bootstrap</div>
                        </div>

                        <div className={skillsCss.box}>
                            <span className={skillsCss.border_left}></span>
                            <span className={skillsCss.border_right}></span>
                            <div className={skillsCss.img}>
                                <Image className='w-full' src={require("../../images/Js.bffd360ed75744b2e9f1.png")} alt="js" />
                            </div>
                            <div className={skillsCss.name}>JS</div>
                        </div>

                        <div className={skillsCss.box}>
                            <span className={skillsCss.border_left}></span>
                            <span className={skillsCss.border_right}></span>
                            <div className={skillsCss.img}>
                                <Image className='w-full' src={require("../../images/Ts.857325d75430cb138db3.png")} alt="ts" />
                            </div>
                            <div className={skillsCss.name}>TS</div>
                        </div>

                        <div className={skillsCss.box}>
                            <span className={skillsCss.border_left}></span>
                            <span className={skillsCss.border_right}></span>
                            <div className={skillsCss.img}>
                                <Image className='w-full' src={require("../../images/Html.186d49a77e7f491a1778.png")} alt="Html" />
                            </div>
                            <div className={skillsCss.name}>Html</div>
                        </div>

                        <div className={skillsCss.box}>
                            <span className={skillsCss.border_left}></span>
                            <span className={skillsCss.border_right}></span>
                            <div className={skillsCss.img}>
                                <Image className='w-full' src={require("../../images/Tailwind.a9b9cfc5a1a4fba67f61.png")} alt="Tailwind" />
                            </div>
                            <div className={skillsCss.name}>Tailwind</div>
                        </div>

                        <div className={skillsCss.box}>
                            <span className={skillsCss.border_left}></span>
                            <span className={skillsCss.border_right}></span>
                            <div className={skillsCss.img}>
                                <Image className='w-full' src={require("../../images/Css.59961a5e63561326a902.png")} alt="css" />
                            </div>
                            <div className={skillsCss.name}>CSS</div>
                        </div>

                        <div className={skillsCss.box}>
                            <span className={skillsCss.border_left}></span>
                            <span className={skillsCss.border_right}></span>
                            <div className={skillsCss.img}>
                                <Image className='w-full' src={require("../../images/Sass.f1cda453a9840dcfa059.png")} alt="scss" />
                            </div>
                            <div className={skillsCss.name}>SCSS</div>
                        </div>

                        <div className={skillsCss.box}>
                            <span className={skillsCss.border_left}></span>
                            <span className={skillsCss.border_right}></span>
                            <div className={skillsCss.img}>
                                <Image className='w-full' src={require("../../images/mui.png")} alt="MUI" />
                            </div>
                            <div className={skillsCss.name}>Material Ui</div>
                        </div>

                        <div className={skillsCss.box}>
                            <span className={skillsCss.border_left}></span>
                            <span className={skillsCss.border_right}></span>
                            <div className={skillsCss.img}>
                                <Image className='w-full' src={require("../../images/jquery-badge.png")} alt="Jqurey" />
                            </div>
                            <div className={skillsCss.name}>Jqurey</div>
                        </div>

                    </div>
                </section>
            </div>
            <div className={skillsCss.line_2}></div>
        </div>

    </>
}
