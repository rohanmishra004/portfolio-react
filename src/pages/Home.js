import React from 'react'
import { LinkedIn, GitHub } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import '../styles/Home.css'

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, My name is Rohan</h2>
                <div className='prompt'>
                    <p>A Software Developer with a passion to learn and create</p>
                    <a href="https://www.linkedin.com/in/rohan-mishra-6b6b4190/" target="_blank" rel="noopener noreferrer">
                        <LinkedIn />
                    </a>
                    <a href="/https://github.com/rohanmishra004" target='_blank' rel='noopener noreferer'>
                        <GitHub />
                    </a>
                    <a href="mailto:rohanmishra.004@gmail.com">
                        <Email />
                    </a>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>ReactJS,HTML,CSS,Bootstrap,Material UI</span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>NodeJs,Express,Django,FastAPI,SpringBoot,mongoDB
                            PostgreSQL
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>JavaScript,Python,Java</span>
                    </li>

                    <li className='item'>
                        <h2>Additional</h2>
                        <span>AWS , github,Terraform</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home