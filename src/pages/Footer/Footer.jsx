import React from 'react'
import './Footer.scss'
import {ReactComponent as Github} from '../../assets/github.svg';
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg';
import {ReactComponent as Instagram} from '../../assets/Instagram.svg';
import {ReactComponent as Whatsapp} from '../../assets/whatsapp.svg';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__icons">
                <div className="footer__icons-icon"><a target='_blank' rel='noreferrer' href="https://github.com/arihant-jain-09"><Github/></a></div>
                        <div className="footer__icons-icon"><a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/arihant-jain-09/"><Linkedin/></a></div>
                        <div className="footer__icons-icon"><a target='_blank' rel='noreferrer' href="https://www.instagram.com/arihant_jain_09/"><Instagram/></a></div>
                        <div className="footer__icons-icon"><a target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=7239873575"><Whatsapp/></a></div>
                </div>
                <div className="footer__text">&copy; 2021 - Arihant Jain All Rights Reserved</div>
        </div>
    )
}

export default Footer
