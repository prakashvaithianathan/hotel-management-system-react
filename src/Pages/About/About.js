import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import style from './About.module.css'


const About = () => {
    return (
        <div>
             <Navbar></Navbar>
            <h1 className={style.title}>About</h1>
        </div>
    )
}

export default About
