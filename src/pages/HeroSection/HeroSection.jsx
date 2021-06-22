import React from 'react'
import './HeroSection.scss'
import {ReactComponent as Line} from '../../assets/line.svg'
const HeroSection = () => {
    return (
        <div className='hero-section'>
                <div className="hero-section-line"><Line/></div>
                <div className="heading-4 hero-section__heading-4 u-color-primary">HELLO</div>
                <div className="heading-1 hero-section__heading-1">I'm <span className='u-color-primary'>Arihant</span>Jain</div>
                <div className="paragraph hero-section__paragraph">This is <span className='u-color-primary-light'>Arihant Jain,</span> Front-end Developer, interests in Web Frameworks and technologies, looking for work</div>
            <div className="hero-section__image">

            </div>
        </div>
    )
}

export default HeroSection
