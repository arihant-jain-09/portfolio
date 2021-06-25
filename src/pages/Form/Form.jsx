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
                <div className="form__details">
                    <div className="detail"><span className='u-color-primary-light'>—</span> +917239873575</div>
                    <div className="detail"><span className='u-color-primary-light'>—</span> jain.ari2000@gmail.com</div>
                    <div className="detail"><span className='u-color-primary-light'>—</span> IIIT Jabalpur, Near Dumna Airport, 482005</div>


                </div>
            </div>

            <div className="form__formelement"><FormElement/></div>
        </div>
        </>
    )
}

export default Form
