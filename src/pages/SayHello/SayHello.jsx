import React from 'react'
import Button from '../../components/Button/Button'
import './SayHello.scss'
const SayHello = () => {
    return (
        <>
        <div className="sayHello__background">

        </div>
        <div className='sayHello'>
            <div className="sayHello__heading-1 heading-1">Just Say <span className="u-color-primary">Hello!</span></div>
            <div className="sayHello__button"><Button type="primary">Hire Me</Button></div>
        </div>
        </>
    )
}

export default SayHello
