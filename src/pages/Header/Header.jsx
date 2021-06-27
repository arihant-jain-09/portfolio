import React,{useState} from 'react'
import Button from '../../components/Button/Button'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import * as Scroll from 'react-scroll';
import './Header.scss'
const Header = () => {
    const Link=Scroll.Link;
    const {width}=useWindowDimensions();
    const [clicked,setclicked]=useState(false);
    return (
        <div className='header'>
            <ul className="header__list header__list--left">
                <li className="header__brand header__item">
                    LOGO
                </li>
            </ul>
            {width > 700 ? <ul className="header__list header__list--right">
                <li className="header__item">HOME</li>
                <Link to="about" spy={true} smooth={true} duration={500}>
                    <li className="header__item">ABOUT ME</li>
                </Link>
                
                <Link to="skills" spy={true} smooth={true} duration={500}>
                    <li className="header__item">SKILLS</li>
                </Link>
                <Link to="portfolio" spy={true} smooth={true} duration={500}>
                    <li className="header__item">PORTFOLIO</li>
                </Link>
                
                <li className="header__item">RESUME</li>
                <Link to="form" spy={true} smooth={true} duration={500}>
                    <Button type='ghost'>Let's Talk</Button>
                </Link>
            </ul> : <ul className="header__list header__list--right">
                <Link to="form" spy={true} smooth={true} duration={500}>
                    <Button type='ghost'>Let's Talk</Button>
                </Link>
                <div className='header__burger-container' onClick={()=>setclicked(!clicked)}>
                    <li className="header__burger"></li>
                </div>
                {clicked && <div className='header__burgerlist'><ul>
                    <Link to="about" spy={true} smooth={true} duration={500}>
                        <li className="header__burgeritem header__burgeritem--1">ABOUT ME</li>
                    </Link>
                    <Link to="skills" spy={true} smooth={true} duration={500}>
                        <li className="header__burgeritem header__burgeritem--2">SKILLS</li>
                    </Link>
                    <Link to="portfolio" spy={true} smooth={true} duration={500}>
                        <li className="header__burgeritem header__burgeritem--3">PORTFOLIO</li>
                    </Link>
                </ul></div>}
            </ul>}
        </div>
    )
}

export default Header
