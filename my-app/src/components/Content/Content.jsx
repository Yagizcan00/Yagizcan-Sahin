import React from 'react'
import "./Content.scss"
import { BiRightArrowAlt } from 'react-icons/bi';


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

            <hr style={{ width: "80%" }} />

            <section className='education'>

                <section className='heading_education'>
                    <section className='dot' />
                    <h2>Education</h2>
                </section>

                <section className='content_education'>
                    <h3>Kağıthane Anatolian High School</h3>
                    <p>2014 - 2018</p>
                    <h3>Doğuş University</h3>
                    <p>Computer Engineering (English)</p>
                    <p>2019 - Continues</p>
                </section>

            </section>

            <hr style={{ width: "80%" }} />

            <section className='technical_skills'>

                <section className='heading_technical_skills'>
                    <section className='dot' />
                    <h2>Technical Skills</h2>
                </section>

                <section className='content_technical_skills'>
                    <ul>
                        <li>- React.js</li>
                        <li>- JavaScript</li>
                        <li>- CSS</li>
                        <li>- HTML</li>
                        <li>- State Management (Context)</li>
                        <li>- Project Architecture</li>
                        <li>- Responsive Apps</li>
                        <li>- Firebase</li>
                        <li>- Netlify</li>
                    </ul>
                </section>

            </section>

            <hr style={{ width: "80%" }} />

            <section className='my_experience'>

                <section className='heading_my_experience'>
                    <section className='dot' />
                    <h2>My Experience</h2>
                </section>

                <section className='content_my_experience'>
                    <h3>Volunteer software support worker</h3>
                    <h4>Inooster I.T. - İstanbul - 2022/2023</h4>
                    <p>
                        I worked as a volunteer for more than 9 months
                        in a software company that produces gamification
                        software to learn my profession better and improve
                        myself. Here, I coded the Entry-Exit application in
                        my projects section by improving myself with the
                        guidance of experienced software developers, by making
                        various practices and thanks to my research & learning
                        skills. In the following process, I continued to work
                        on front-end.
                    </p>
                </section>

            </section>

            <hr style={{ width: "80%" }} />

            <section className='languages'>

                <section className='heading_languages'>
                    <section className='dot' />
                    <h2>Languages</h2>
                </section>

                <section className='content_languages'>
                    <ul>
                        <li>- English  (B2 level)</li>
                        <li>- German  (A1 level)</li>
                        <li>- Turkish  (Natural)</li>
                    </ul>
                </section>

            </section>

            <hr style={{ width: "80%" }} />

            <section className='my_projects'>

                <section className='heading_my_projects'>
                    <section className='dot' />
                    <h2>My Projects</h2>
                </section>

                <section className='content_my_projects'>
                    <>
                        <h3>Entry-Exit</h3>
                        <p>
                            This project was coded to read the entry and
                            exit times of the employees. While carrying
                            out this project, I learned how to connect
                            with the backend using the API, how to use
                            the react-data-table-component library, etc.
                            technical features. I developed this project
                            for my workplace. That's why I can't share it
                            anywhere.
                        </p>
                    </>
                    <>
                        <h3>Seven to Seven</h3>
                        <p>
                            I coded this project to have more fun while
                            playing football with my friends. I used the
                            react-draggable library, the react-router-dom
                            library, the react-icons library, the react-color
                            library, the use-react-screenshot library, etc.
                            The link of this project is in my GitHub account
                        </p>
                        <a href="https://seventoseven.netlify.app" target="_blank"><BiRightArrowAlt className='icon' /><p>seventoseven.netlify.app</p></a>
                    </>
                    <>
                        <h3>Weather App</h3>
                        <p>
                            I coded this project to have more fun while playing
                            football with my friends. I used the react-draggable
                            library, the react-router-dom library, the react-icons
                            library, the react-color library, the use-react-screenshot
                            library, etc. This project has two different versions.
                            The first version is available on my GitHub account,
                            and the second version is a version that I customized
                            and edited for my girlfriend, if you want the link of
                            this version, I can share it with you.
                        </p>
                    </>
                    <>
                        <h3>QR Menu & QR Code Creator</h3>
                        <p>
                            I coded this project to complete a freelance job. My
                            customer asked me for a QR code-enabled menu for
                            the cafe he owned, and I coded a QR code for his cafe
                            and the necessary actions to direct the devices that
                            read this QR code to the Menu site. Then I developed
                            this Menu application for mobile devices. While
                            developing these applications, I used the qrcode.react
                            library and various react methods. The link of my QR
                            code generator application is in my Github Account,
                            but since my Menu application is private to my client,
                            it is privately in my GitHub account but if you want
                            I can show you an example.
                        </p>
                    </>
                    <>
                        <h3>Quiz App</h3>
                        <p>
                            I developed this project for practice. I'm sure you know
                            that there is a contest called "Who wants to be a millionaire"
                            and I developed this web application inspired by this contest.
                            While developing this application, I used many methods such
                            as useReducer, useRef, useEffect, etc. The link of the application
                            is in my GitHub account.
                        </p>
                    </>
                </section>

            </section>

            <hr style={{ width: "80%" }} />

            <section className='libraries_i_use'>

                <section className='heading_libraries_i_use'>
                    <section className='dot' />
                    <h2>Libraries I Use</h2>
                </section>

                <section className='content_libraries_i_use'>
                    <ul>
                        <li>- react-router-dom</li>
                        <li>- react-icons</li>
                        <li>- react-dropzone</li>
                        <li>- react-draggable </li>
                        <li>- react-data-table-component</li>
                        <li>- react-color </li>
                        <li>- use-react-screenshot </li>
                    </ul>
                </section>

            </section>

            <hr style={{ width: "80%" }} />

            <section className='soft_skills'>

                <section className='heading_soft_skills'>
                    <section className='dot' />
                    <h2>Soft Skills</h2>
                </section>

                <section className='content_soft_skills'>
                    <ul>
                        <li>- Research & Learning</li>
                        <li>- Devotion</li>
                        <li>- Professional Loyalty</li>
                        <li>- Discipline</li>
                        <li>- Professional Interest</li>
                        <li>- Diligence</li>
                        <li>- Resolution</li>
                    </ul>
                </section>

            </section>

            <hr style={{ width: "80%" }} />

            <section className='hobbies'>

                <section className='heading_hobbies'>
                    <section className='dot' />
                    <h2>Hobbies</h2>
                </section>

                <section className='content_hobbies'>
                    <ul>
                        <li>- Playing snooker</li>
                        <li>- Playing football</li>
                        <li>- Reading book</li>
                        <li>- Walking with my dog</li>
                        <li>- Playing computer games</li>
                        <li>- Swimming</li>
                    </ul>
                </section>

            </section>

            <br />
            <br />
            <br />

        </div>
    )
}

export default Content
