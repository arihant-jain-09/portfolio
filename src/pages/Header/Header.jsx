import React,{useState} from 'react'
import Button from '../../components/Button/Button'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './Header.scss'
const Header = () => {
    const {width}=useWindowDimensions();
    const [clicked,setclicked]=useState(false);
    console.log(clicked);
    return (
        <div className='header'>
            <ul className="header__list header__list--left">
                <li className="header__brand header__item">
                    LOGO
                </li>
            </ul>
            {width > 700 ? <ul className="header__list header__list--right">
                <li className="header__item">HOME</li>
                <li className="header__item">ABOUT ME</li>
                <li className="header__item">SKILLS</li>
                <li className="header__item">PORTFOLIO</li>
                <li className="header__item">RESUME</li>
                <Button type='ghost'>Let's Talk</Button>
            </ul> : <ul className="header__list header__list--right">
                <Button type='ghost'>Let's Talk</Button>
                <li onClick={()=>setclicked(!clicked)} className="header__item header__burger"></li>
                {clicked && <ul className='header__burgerlist'>
                    <li className="header__burgeritem">ABOUT ME</li>
                    <li className="header__burgeritem">SKILLS</li>
                    <li className="header__burgeritem">PORTFOLIO</li>
                </ul>}
            </ul>}
        </div>
    )
}

export default Header
