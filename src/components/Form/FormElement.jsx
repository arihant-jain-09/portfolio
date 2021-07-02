import React,{useState} from 'react'
import Button from '../Button/Button'
import "./FormElement.scss"
import emailjs from 'emailjs-com'
const FormMap = () => {
    const [forminput,setforminput]=useState({
        name:'',
        mail:'',
        budget:'',
        description:''
    })
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(forminput);
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID , e.target, process.env.REACT_APP_USER_ID)
        .then((response) => {
        console.log('SUCCESS!', response.status, response);
        }, (err) => {
        console.log('FAILED...', err);
        });
        setforminput({
            name:'',
            mail:'',
            budget:'',
            description:''
        })
        }

    const onChange=(e)=>{
            const {name,value}=e.target;
            setforminput(()=>{
            return {
                ...forminput,
                [name]:value
            }
        })
    }
    return (
        <>
            <form onSubmit={onSubmit} className="formelement">
                    <div className="formelement__inputContainer"><input className="formelement__name" type='text' name="name" placeholder='Your Name' value={forminput.name} onChange={onChange} required/></div>
                    <div className="formelement__inputContainer"><input className="formelement__email" type='email' name="mail" placeholder='Mail Address' value={forminput.mail} onChange={onChange} required/></div>
                    <div className="formelement__inputContainer"><input className="formelement__budget" type='text' name="budget" placeholder='Your budget (optional)' value={forminput.budget} onChange={onChange}/></div>
                    <div className="formelement__inputContainer"><textarea className="formelement__description" type='text' name="description" placeholder='Project description' value={forminput.description} onChange={onChange} required/></div>

                <Button type="primary">Hire Me</Button>
            </form>
            </>
    )
}

export default FormMap
