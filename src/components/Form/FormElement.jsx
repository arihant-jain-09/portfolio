import React,{useState} from 'react'
import Button from '../Button/Button'
import "./FormElement.scss"
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
                    <div className="formelement__inputContainer"><input className="formelement__name" type='text' name="name" placeholder='Your Name' value={forminput.name} onChange={onChange}/></div>
                    <div className="formelement__inputContainer"><input className="formelement__email" type='email' name="mail" placeholder='Mail Address' value={forminput.mail} onChange={onChange}/></div>
                    <div className="formelement__inputContainer"><input className="formelement__budget" type='text' name="budget" placeholder='Your budget (optional)' value={forminput.budget} onChange={onChange}/></div>
                    <div className="formelement__inputContainer"><textarea className="formelement__description" type='text' name="description" placeholder='Project description' value={forminput.description} onChange={onChange}/></div>

                <Button type="primary">Hire Me</Button>
            </form>
            </>
    )
}

export default FormMap
