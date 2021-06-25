import React from 'react'
import './Portfolio.scss'
import { ReactComponent as DottedBig } from '../../assets/dotted-big.svg'
import { ReactComponent as Line } from '../../assets/line.svg'
import Section from '../../components/Section/Section'
const Portfolio = () => {
    return (<>
        <div className="portfolio__background">
            <div className="portfolio__background-dottedbig portfolio__background-element dottedbig"><DottedBig/></div>
            <img className="image portfolio__background-image portfolio__background-element" src="/discord.png" alt="discord-clone"/>
        </div>
        <div className='portfolio'>
            <div className="portfolio-line"><Line/></div>
            <div className="portfolio__section"><Section text="Portfolio">Portfolio</Section></div>
            <div className="heading-4 portfolio__heading-4 u-color-primary"><span>PROJECT</span></div>
            <div className="heading-1 portfolio__heading-1"><span className='u-color-primary'>DISCORD</span> CLONE</div>
            <div className="paragraph portfolio__paragraph"><span className='u-color-primary-light'>Discord</span> with unique roles in each server, image, audio sharing, auto render video links in messages, discord loading logo between page renderings with React, React Router, Material UI, SASS, Styled components and firebase CRUD</div>
        </div>
        </>
    )
}

export default Portfolio
