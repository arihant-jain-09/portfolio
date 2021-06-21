import React from 'react'
import './Button.scss'
const Button = ({type}) => {
    return <button className={`button--${type} button`}>Let's Talk</button>
}

export default Button
