'use client'
import React, { useEffect } from 'react'

export default function Mouse() {

    useEffect(() => {

        let mouseCircle:any = document.getElementById('mouseCircle');

        document.addEventListener('mousemove', function (e) {
            let x = e.clientX;
            let y = e.clientY;

            mouseCircle.style.left = `${x}px`;
            mouseCircle.style.top = `${y}px`;
        })


    }, [])
    return <>


        <div id='mouseCircle' className='shadow-2xl shadow-sky-800'></div>
    </>
}
