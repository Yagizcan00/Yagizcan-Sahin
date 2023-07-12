import React from 'react'
import "./Heading.scss"
import { MdEmail } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';


function Heading() {


    const handleClickMail = () => {
        window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank');
    }

    
    const handleClickGitHub = () => {
        // window.location.href = "https://github.com/Yagizcan00"
        window.open('https://github.com/Yagizcan00', '_blank');
    }


    const handleClickLinkedin = () => {
        // window.location.href = "https://linkedin.com/in/yağızcan-şahin-a00a13200/"
        window.open('https://linkedin.com/in/yağızcan-şahin-a00a13200/', '_blank');
    }


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
                    <section className='icon_background'><MdEmail className='icon' onClick={handleClickMail} /></section>
                    <p>yagizcansahin68@gmail.com</p>
                </section>
                <section className='content_item'>
                    <section className='icon_background'><AiFillGithub className='icon' onClick={handleClickGitHub} /></section>
                    <p>github.com/Yagizcan00</p>
                </section>
                <section className='linkedin'>
                    <section className='linkedin_icon_background'><AiFillLinkedin className='linkedin_icon' onClick={handleClickLinkedin} /></section>
                    <p>linkedin.com/in/yağızcan-şahin-a00a13200/</p>
                </section>
                <section className='content_item'>
                    <section className='icon_background'><BsFillTelephoneFill className='icon' /></section>
                    <p>+90 551 429 88 82</p>
                </section>

            </section>

        </div>
    )
}

export default Heading
