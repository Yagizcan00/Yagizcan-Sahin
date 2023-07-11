import React from 'react'
import "./Heading.scss"
import { MdEmail } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';


function Heading() {

    return (
        <div className='heading'>

            <section className='update_date'>
                <p>11/07/2023</p>
            </section>

            <section className='big_heading'>
                <h1>Yağızcan Şahin</h1>
                <h2>Front-End Developer</h2>
            </section>

            <section className='contact'>

                <section className='content_item'>
                    <section className='icon_background'><MdEmail className='icon' /></section>
                    <p>yagizcansahin68@gmail.com</p>
                </section>
                <section className='content_item'>
                    <section className='icon_background'><AiFillGithub className='icon' /></section>
                    <p>github.com/Yagizcan00</p>
                </section>
                <section className='linkedin'>
                    <section className='linkedin_icon_background'><AiFillLinkedin className='linkedin_icon' /></section>
                    <p>linkedin.com/in/yağızcan-şahin-a00a13200/</p>
                </section>
                <section className='content_item'>
                    <section className='icon_background'><MdEmail className='icon' /></section>
                    <p>yagizcansahin68@gmail.com</p>
                </section>

            </section>

        </div>
    )
}

export default Heading
