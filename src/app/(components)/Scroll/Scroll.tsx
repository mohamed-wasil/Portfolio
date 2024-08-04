"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import scrollCss from './Scroll.module.css'

// import required modules
import { Pagination } from 'swiper/modules';
import Link from 'next/link';


export default function ScrollComponent() {
    return (
        <>
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={scrollCss.year}>
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
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className={scrollCss.year}>
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className={scrollCss.year}>
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
                </SwiperSlide>
                <SwiperSlide>
                    <div className={scrollCss.year}>
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
                </SwiperSlide>
            </Swiper>
        </>
    );
}
