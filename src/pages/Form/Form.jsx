import React from 'react'
import './Form.scss'
import FormElement from '../../components/Form/FormElement'
import {ReactComponent as DashArrow} from '../../assets/DashArrow.svg'
const Form = () => {
    return (<>
        <div className="form__background">
        <div className="form__background-color form__background-element"></div>
        </div>
        
        <div className='form'>
            <div className="form__left">
                <div className="form__heading-3 heading-3">Let’s make something new, different and more meaningful or make thing  more visual or Conceptual ? Just Say Hello !</div>
                <div className="form__dasharrow"><DashArrow/></div>
            </div>

            <div className="form__formelement"><FormElement/></div>
        </div>
        </>
    )
}

export default Form
