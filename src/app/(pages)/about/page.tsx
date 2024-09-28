import React from 'react'
import aboutCss from "./about.module.css"
import Link from 'next/link'
import Mouse from '@/app/(components)/Mouse/Mouse'
import { Helmet } from 'react-helmet'

export default function page() {
    return <>

        <div className={aboutCss.about}>

            <Mouse />

            <div className={aboutCss.squares}>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>

                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>

                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>

                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>

                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>

                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>

                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>

                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>

                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>

                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
                <div className={aboutCss.square}></div>
            </div>

            <div className={aboutCss.cricle_left}></div>
            <div className={aboutCss.cricle_right}></div>

            <div className={aboutCss.wrapper}>
                <div className={aboutCss.shine}></div>
                <div className={aboutCss.line_1}></div>
            </div>

            <div className=" mx-auto xl:px-28" >
                <div className={aboutCss.content_about}>
                    <div className={"h-full px-3 " + aboutCss.info} >
                        {/* <SwiperComponent /> */}
                        <div className={aboutCss.swiper}>
                            <div className={aboutCss.swiper_wrapper}>
                                <div className={aboutCss.swiper_slider}>
                                    <h3>Education</h3>
                                    <div className={aboutCss.box}>
                                        <div className={aboutCss.slide_1}></div>

                                        <div className={aboutCss.years}>
                                            <div className={aboutCss.year}>
                                                <span>2021</span>
                                                <div>
                                                    At the of this year, I learned
                                                    <p>html</p>
                                                    <p>css</p>
                                                    <p>scss</p>
                                                    <p>bootstrap</p>
                                                    then I created projects including the following:
                                                    <Link href='/projects'>Visit Projects</Link>
                                                </div>
                                            </div>


                                            <div className={aboutCss.year}>
                                                <span>2022</span>
                                                <div>
                                                    At the of this year, I learned
                                                    <p>Tailwind</p>
                                                    <p>Javascript</p>
                                                    <p>Em6</p>
                                                    <p>Typescript</p>
                                                    and working with the API and then created some independent projects which include the following:
                                                    <Link href='/projects'>Visit Projects</Link>
                                                </div>
                                            </div>

                                            <div className={aboutCss.year}>
                                                <span>2023</span>
                                                <div>
                                                    At the of this year, I learned
                                                    <p>react.js</p>
                                                    <p>redux toolkit</p>
                                                    <p>next.js</p>
                                                    <p>Material Ui</p>
                                                    and I created large projects that include the following:
                                                    <Link href='/projects'>Visit Projects</Link>
                                                </div>
                                            </div>

                                            <div className={aboutCss.year}>
                                                <span>2024</span>
                                                <div>
                                                    At the of this year I developed my front-end skills and learned back end <p> node js</p> .
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
            <div className={aboutCss.line_2}></div>

        </div>

    </>
}
