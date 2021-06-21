import React from 'react'
import Button from '../../components/Button/Button'
import './Header.scss'
const Header = () => {
    return (
        <div className='header'>
            <ul className="header__list header__list--left">
                <li className="header__brand">
                    LOGO
                </li>
            </ul>
            <ul className="header__list header__list--right">
                <li className="header__item">HOME</li>
                <li className="header__item">ABOUT ME</li>
                <li className="header__item">SKILLS</li>
                <li className="header__item">PORTFOLIO</li>
                <li className="header__item">RESUME</li>
                <Button type='ghost'/>
            </ul>
        </div>
    )
}

export default Header
