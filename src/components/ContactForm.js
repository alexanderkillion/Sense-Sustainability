import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import styled from 'styled-components'
require('dotenv').config()

/*
in the .env file

REACT_APP_SERVICE_ID = "the id of the mailing service"
REACT_APP_TEMPLATE_ID = "the id of the template used from mailjs"
REACT_APP_USER_ID = "your user id""
*/

const Form = styled.form`
    width: 50vw;
    margin: auto;
    display: grid;
    margin-bottom: 16px;

    button {
        text-align: center;
        justify-self: center;
        background-color: blue;
        color: white;
        height: 32px;
        border: none;
        border-radius: 8px;
    }
`

const InputField = styled.div`
    display: grid;
    margin: 16px 0px;
    padding: 10px;
    border-radius: 3px;

    > :first-child{
        padding-bottom: 8px;
    }
`

function ContactForm() {

    const initInputs = {name: '', email: '', phone: '', subject: '', message: ''}
    const [inputs, setInputs] = useState(initInputs)
    const [sent, setSent] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        })
    }

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const onSubmit = async (data) => {
        const { name, email, phone, subject, message } = data
        try {
          const templateParams = {
            name,
            email,
            phone,
            subject,
            message
          }
          await emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
          )
          reset()
          toastifySuccess()
        } catch (e) {
          console.log(e)
        }
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputField>
                <input 
                    value={inputs.name} 
                    placeholder='Your Name'
                    {...register('name', {
                        onChange:(e) => handleChange(e),
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'}
                    })}/>
            </InputField>
            <InputField>
                <input  
                    value={inputs.email} 
                    placeholder='your-email@cariera.com' 
                    {...register('email', {
                        onChange:(e) => handleChange(e),
                        required: { value: true, message: 'Please enter your email' },
                        maxLength: {
                          value: 40,
                          message: 'Please use 64 characters or less'}
                    })}/>
            </InputField>
            <InputField>
                <input 
                    value={inputs.phone} 
                    placeholder='Your Phone Number' 
                    {...register('phone', {
                        onChange:(e) => handleChange(e),
                        required: { value: true, message: 'Please enter your number' },
                        maxLength: {
                          value: 10,
                          message: 'Please enter a valid phone number.'}
                    })}/>
            </InputField>
            <InputField>
                <input  
                    value={inputs.subject} 
                    placeholder='Subject'
                    {...register('subject', {
                        onChange:(e) => handleChange(e),
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'}
                    })} />
            </InputField>
            <InputField>
                <textarea 
                    value={inputs.message} 
                    placeholder='Your Message'
                    {...register('message', {
                        onChange:(e) => handleChange(e),
                        required: { value: true, message: 'Please leave a message here.' },
                        maxLength: {
                          value: 500,
                          message: 'Please use 500 characters or less'}
                    })}
                    style={{resize: 'none', height: '150px'}} />
            </InputField>
            {sent ? <p style={{color: 'green'}}>Sent Successfully.  Thank you for contacting us!</p> : null}
            <button>Send Message</button>
        </Form>
    )
}

export default ContactForm
