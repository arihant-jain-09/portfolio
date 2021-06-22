import React from 'react'
import './Button.scss'
const Button = ({type,children}) => {
    return <button className={`button--${type} button`}>{children}</button>
}

export default Button
