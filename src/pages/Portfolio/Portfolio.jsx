import React from 'react'
import './Portfolio.scss'
import { ReactComponent as DottedBig } from '../../assets/dotted-big.svg'
import { ReactComponent as Line } from '../../assets/line.svg'
import Section from '../../components/Section/Section'
const Portfolio = () => {
    return (<>
        <div className="portfolio__background">
            <div className="portfolio__background-dottedbig portfolio__background-element dottedbig"><DottedBig/></div>
        </div>
        <div className='portfolio'>
        <div className="portfolio__section"><Section text="Portfolio">Portfolio</Section></div>
            <div className="portfolio__1">
                <div className="portfolio__left">
                    <div className="portfolio-line"><Line/></div>
                    <div className="heading-4 portfolio__heading-4 u-color-primary"><span>PROJECT</span></div>
                    <div className="heading-1 portfolio__heading-1"><span className='u-color-primary'>DISCORD</span> CLONE</div>
                    <div className="paragraph portfolio__paragraph"><span className='u-color-primary-light'>Discord</span> with unique roles in each server, image, audio sharing, auto render video links in messages, discord loading logo between page renderings with React, React Router, Material UI, SASS, Styled components and firebase CRUD</div>
                </div>
                <div className="portfolio__right">
                    <a target='_blank' rel="noreferrer"href="https://arihant-jain-09.github.io/discord-clone/"><img src="/discord.webp" alt="discord" /></a>
                    
                </div>
            </div>   
            <div className="portfolio__2">
                <div className="portfolio__2-right">
                    <div className="portfolio-line"><Line/></div>
                    <div className="heading-4 portfolio__heading-4 u-color-primary"><span>PROJECT</span></div>
                    <div className="heading-1 portfolio__heading-1"><span className='u-color-primary'>BURGURLY</span> WEB </div>
                    <div className="paragraph portfolio__paragraph"><span className='u-color-primary-light'>Food Ordering</span> Web App with Google Authentication, Payments, Food Search with suggestions, Persistent Cart, Eye catching UI, Multiple orders, Dashboard. Technologies used React, NodeJS, MongoDB, React Redux(Redux Saga), SCSS (no external library)</div>
                </div>
                <div className="portfolio__2-left">
                    <a target='_blank' rel="noreferrer"href="http://burgurly.azurewebsites.net/"><img src="burgurly.webp" alt="burgurly" /></a>
                </div>
            </div>     
        </div>
        </>
    )
}

export default Portfolio
