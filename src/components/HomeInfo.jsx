import React from 'react'
import { Link } from 'react-router-dom';
import arrow from '/assets/icons/arrow.svg'

const InfoBox = ({ text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center text-white'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1 : (
        <h1 className='sm_text-x1 sm:leading-snug text-center neo-brutalism-green py-4
         px-8 text-white mx-5'>
            Hi, My name is <span className='font-semibold'>Mojtaba Alizade</span> 👋
            <br />
            A Software Engineer from Sweden.
            <br />
            Welcome to my portfolio, take a look around!
        </h1>
    ),
    2 : (
        <InfoBox 
            text='I am a first year master student in Software Engineering at Chalmers University of Technology in Gothenburg, Sweden.'
            link='/about'
            btnText='Learn More'
        />
    ),
    3 : (
        <InfoBox 
            text='My projects include web development, game development, and software development.'
            link='/projects'
            btnText='Visit my projects'
        />
    ),
    4 : (
        <InfoBox 
            text="Looking for a software engineer? I'm just a few clicks away"
            link='/contact'
            btnText='Let´s talk'
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo