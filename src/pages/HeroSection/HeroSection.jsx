import React from 'react'
import './HeroSection.scss'
import '../../styles/Elements/elements.scss'
import {ReactComponent as Line} from '../../assets/line.svg'
import {ReactComponent as HexagonStraight} from '../../assets/hexagon-straight.svg'
import {ReactComponent as Circle} from '../../assets/circle.svg'
import {ReactComponent as Dot} from '../../assets/dot.svg'
import {ReactComponent as HexagonBenzene} from '../../assets/hexagon-benzene.svg'
import {ReactComponent as Triangle} from '../../assets/triangle.svg'
import {ReactComponent as Benzene} from '../../assets/benzene.svg'
import Button from '../../components/Button/Button'
const HeroSection = () => {
    return (<>
        <div className="hero-section__background">
            <div className="hero-section__background-hexagonstraight hero-section__background-element hexagon"><HexagonStraight/></div>
            <div className="hero-section__background-circle hero-section__background-element circle"><Circle/></div>
            <div className="hero-section__background-dot hero-section__background-element dot"><Dot/></div>
            <div className="hero-section__background-hexagonbenzene hero-section__background-element hexabenzene"><HexagonBenzene/></div>
            <div className="hero-section__background-triangle hero-section__background-element triangle"><Triangle/></div>
            <div className="hero-section__background-benzene hero-section__background-element benzene"><Benzene/></div>
            <div className="hero-section__background-tiltedtriangle hero-section__background-element triangle"><Triangle/></div>
            <div className="hero-section__background-socialicons hero-section__background-element"></div>
        </div>
        <div className='hero-section'>
                <div className="hero-section-line"><Line/></div>
                <div className="heading-4 hero-section__heading-4 u-color-primary"><span>HELLO</span></div>
                <div className="heading-1 hero-section__heading-1">I'm <span className='u-color-primary'>Arihant</span> Jain</div>
                <div className="paragraph hero-section__paragraph">This is <span className='u-color-primary-light'>Arihant Jain,</span> Full Stack Developer, interests in Web Frameworks and technologies, looking for work</div>
                <div className="hero-section__button"><a target='_blank' rel='noreferrer'href="/resume.pdf"><Button type='primary'>Download CV</Button></a></div>
            <div className="hero-section__image">

            </div>
        </div>
        </>
    )
}

export default HeroSection
