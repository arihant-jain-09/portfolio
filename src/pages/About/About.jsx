import React from 'react'
import Section from '../../components/Section/Section'
import './About.scss'
import '../../styles/Elements/elements.scss'
import {ReactComponent as DottedBig} from '../../assets/dotted-big.svg'
import {ReactComponent as DottedSmall} from '../../assets/dotted-small.svg'
import {ReactComponent as Signature} from '../../assets/signature.svg'
import {ReactComponent as Line} from '../../assets/line.svg'
import Button from '../../components/Button/Button'
const About = () => {
    return (<>
        <div className="about__background">
            <div className="about__background-dottedbig about__background-element dottedbig"><DottedBig/></div>
            <div className="about__background-dottedsmall about__background-element dottedsmall"><DottedSmall/></div>
        </div>
        <div className='about'>
            <div className="about__section"><Section text="About">About Me</Section></div>
            <div className="about__left">
                <img src="./ab.webp" alt="About" />
            </div>
            <div className="about__right">
                <div className="about-line"><Line/></div>
                <div className="heading-4 about__heading-4 u-color-primary"><span>LET ME INTRODUCE MYSELF</span></div>
                <div className="about__paragraph paragraph--big">I'm a <span className="u-color-primary-light">Professional Full-stack developer</span> and I am very passionate and dedicated to my work, I have acquired the skills and knowledge necessary to make your project a success, I enjoy every step of the Web Development process, from building the base of the app to the final product, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</div>
                <div className="about__signature"><Signature/></div>
                <div className="about__button"><Button type="primary">Hire Me</Button></div>
            </div>
        </div>
        </>
    )
}

export default About
