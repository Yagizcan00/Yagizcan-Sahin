import React from 'react'
import "./Content.scss"

function Content() {

    return (
        <div className='content'>

            <section className='about_myself'>
                <section className='heading_about_myself'>
                    <section className='dot' />
                    <h2>About Myself</h2>
                </section>
                <section className='content_about_myself'>
                    <p>I will briefly tell you about myself.
                        I love coding, creativity, analysis and football;
                        I am a young software developer trying to become a
                        senior front-end developer. At the moment, I am
                        focused on react.js and I believe that one day
                        I will be able to achieve my goal thanks to the
                        projects I develop together with the work I do every
                        day.
                    </p>
                </section>
            </section>

        </div>
    )
}

export default Content
