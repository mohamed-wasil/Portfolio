"use client"
import React from 'react'
import projectsCss from './project.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import Mouse from '@/app/(components)/Mouse/Mouse';
import { Helmet } from 'react-helmet';

export default function page() {


    return <>

        <div className={projectsCss.projects}>

            <div className={projectsCss.squares}>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>

                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>

                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>

                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>

                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>

                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>

                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>

                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>

                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>

                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
                <div className={projectsCss.square}></div>
            </div>

            <div className={projectsCss.cricle_left}></div>
            <div className={projectsCss.cricle_right}></div>

            <div className={projectsCss.wrapper}>
                <div className={projectsCss.shine}></div>
                <div className={projectsCss.line_1}></div>
            </div>

            <div className={"h-full px-3 " + projectsCss.info} >
                <div className={projectsCss.page_title}>Recent Projects</div>

                <Swiper
                    navigation={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{ 
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={projectsCss.card}>
                            <div className={projectsCss.image}>
                                <div className={projectsCss.img}>
                                    <div className='inline-block text-transparent'>
                                        <Image className='w-full' src={require("../../images/movieApp.png")} alt='movie-app' />
                                    </div>
                                </div>
                            </div>
                            <p className={projectsCss.title}>Movie App</p>
                            <span className={projectsCss.desc}>My simple project Movies Is ( 18 ) pages using React</span>

                            <div className={projectsCss.btns}>
                                <Link href='https://block-bostermovies-git-master-mohamed-wasils-projects.vercel.app/' >Vist</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={projectsCss.card}>
                            <div className={projectsCss.image}>
                                <div className={projectsCss.img}>
                                    <div className='inline-block text-transparent'>
                                        <Image className='w-full' src={require("../../images/ecommerce.png")} alt='shopping' />
                                    </div>
                                </div>
                            </div>
                            <p className={projectsCss.title}>Ecommerce</p>
                            <span className={projectsCss.desc}>My simple project Shopping Is ( 15 ) pages using the React & Redux Toolkit..</span>

                            <div className={projectsCss.btns}>
                                <Link href='https://reactecommerce-92bc5.web.app/' >Vist</Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={projectsCss.card}>
                            <div className={projectsCss.image}>
                                <div className={projectsCss.img}>
                                    <div className='inline-block text-transparent'>
                                        <Image className='w-full' src={require("../../images/Dashboard.2da9020c8e1cff7c5c6f.png")} alt='shopping' />
                                    </div>
                                </div>
                            </div>
                            <p className={projectsCss.title}>Dashboard</p>
                            <span className={projectsCss.desc}>My simple project Shopping Is ( 10 ) pages using the scss & React & Redux Toolkit..</span>

                            <div className={projectsCss.btns}>
                                <Link href='/' >Vist</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={projectsCss.card}>
                            <div className={projectsCss.image}>
                                <div className={projectsCss.img}>
                                    <div className='inline-block text-transparent'>
                                        <Image className='w-full' src={require("../../images/Travilo.png")} alt='travilo' />
                                    </div>
                                </div>
                            </div>
                            <p className={projectsCss.title}>Travilo</p>
                            <span className={projectsCss.desc}>My simple project Shopping page using the Html & Css & Bootstrap & Js..</span>

                            <div className={projectsCss.btns}>
                                <Link href='https://mohamed-wasil.github.io/travel-project/' >Vist</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={projectsCss.card}>
                            <div className={projectsCss.image}>
                                <div className={projectsCss.img}>
                                    <div className='inline-block text-transparent'>
                                        <Image className='w-full' src={require("../../images/raustorant.png")} alt='raustorant' />
                                    </div>
                                </div>
                            </div>
                            <p className={projectsCss.title}>raustorant</p>
                            <span className={projectsCss.desc}>My simple project Shopping Is  page using the Html & Css & Bootstrap & Js..</span>

                            <div className={projectsCss.btns}>
                                <Link href='/' >Vist</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={projectsCss.card}>
                            <div className={projectsCss.image}>
                                <div className={projectsCss.img}>
                                    <div className='inline-block text-transparent'>
                                        <Image className='w-full' src={require("../../images/Apdash.png")} alt='apdash' />
                                    </div>
                                </div>
                            </div>
                            <p className={projectsCss.title}>Apdash</p>
                            <span className={projectsCss.desc}>My simple project is landing page with Tailwind</span>

                            <div className={projectsCss.btns}>
                                <Link href='https://mohamed-wasil.github.io/landing-page-with-tailwindcss/' >Vist</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className={projectsCss.card}>
                            <div className={projectsCss.image}>
                                <div className={projectsCss.img}>
                                    <div className='inline-block text-transparent'>
                                        <Image className='w-full' src={require("../../images/Drou.png")} alt='Drou' />
                                    </div>
                                </div>
                            </div>
                            <p className={projectsCss.title}>Drou</p>
                            <span className={projectsCss.desc}>My simple project Shopping Is  page using the Html & Css & Bootstrap & Js..</span>

                            <div className={projectsCss.btns}>
                                <Link href='https://mohamed-wasil.github.io/Drou-Store/' >Vist</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
            <div className={projectsCss.line_2}></div>

        <Mouse />
        </div>
    </>
}
