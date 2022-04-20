import React from 'react'
import './Portfolio.scss'
import { ReactComponent as DottedBig } from '../../assets/dotted-big.svg'
import { ReactComponent as Line } from '../../assets/line.svg'
import {ReactComponent as External} from '../../assets/external.svg';
import {ReactComponent as Code} from '../../assets/code.svg';
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
                    <div className="portfolio__icons">
                        <div className="portfolio__icons-icon"><a target='_blank' rel='noreferrer' href="https://arihant-jain-09.github.io/discord-clone/"><External/></a></div>
                        <div className="portfolio__icons-icon"><a target='_blank' rel='noreferrer' href="https://github.com/arihant-jain-09/discord-clone"><Code/></a></div>
                    </div>
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
                    <div className="paragraph portfolio__paragraph"><span className='u-color-primary-light'>Food Ordering</span> Web app for ordering food with customer and restaurant sides. Used technologies include React, NodeJS, MongoDB, React-Redux (Redux Saga), and SCSS (no external libraries).</div>
                    <div className="portfolio__icons">
                        <div className="portfolio__icons-icon"><a target='_blank' rel='noreferrer' href="https://burgurly.azurewebsites.net/"><External/></a></div>
                        <div className="portfolio__icons-icon"><a target='_blank' rel='noreferrer' href="https://github.com/arihant-jain-09/burgurly"><Code/></a></div>
                    </div>
                </div>
                <div className="portfolio__2-left">
                    <a target='_blank' rel="noreferrer"href="http://burgurly.azurewebsites.net/"><img src="burgurly.webp" alt="burgurly" /></a>
                </div>
            </div>
            <div className="portfolio__1">
                <div className="portfolio__left">
                    <div className="portfolio-line"><Line/></div>
                    <div className="heading-4 portfolio__heading-4 u-color-primary"><span>PROJECT</span></div>
                    <div className="heading-1 portfolio__heading-1"><span className='u-color-primary'>MAIL</span> BURST</div>
                    <div className="paragraph portfolio__paragraph"><span className='u-color-primary-light'>Web App</span> for bulk email sending using SendGrid with a user dashboard, credit-based email sending, Google Authentication, and Stripe Payments.</div>
                    <div className="portfolio__icons">
                        <div className="portfolio__icons-icon"><a target='_blank' rel='noreferrer' href="https://mailburstapp.herokuapp.com/"><External/></a></div>
                        <div className="portfolio__icons-icon"><a target='_blank' rel='noreferrer' href="https://github.com/arihant-jain-09/Mailburst"><Code/></a></div>
                    </div>
                </div>
                <div className="portfolio__right">
                    <a target='_blank' rel="noreferrer"href="https://mailburstapp.herokuapp.com/"><img src="/mail_burst.webp" alt="mail_burst" /></a>
                    
                </div>
            </div>      
        </div>
        </>
    )
}

export default Portfolio
