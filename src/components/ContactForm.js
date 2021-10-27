import React, {useState} from 'react'
import styled from 'styled-components'

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

    > :first-child{
        padding-bottom: 8px;
    }
`

function ContactForm() {
    
    const initInputs = {name: '', email: '', phone: '', subject: '', message: ''}
    const [inputs, setInputs] = useState(initInputs)
    const [sent, setSent] = useState(false)

    function handleChange(e){
        const { name, value } = e.target

        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()

        setSent(true)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputField>
                <label>Name</label>
                <input 
                    name='name' 
                    value={inputs.name} 
                    onChange={handleChange} 
                    placeholder='Name' />
            </InputField>
            <InputField>
                <label>Email</label>
                <input 
                    name='email' 
                    value={inputs.email} 
                    onChange={handleChange} 
                    placeholder='Email' />
            </InputField>
            <InputField>
                <label>Phone</label>
                <input 
                    name='phone' 
                    value={inputs.phone} 
                    onChange={handleChange} 
                    placeholder='Phone' />
            </InputField>
            <InputField>
                <label>Subject</label>
                <input 
                    name='subject' 
                    value={inputs.subject} 
                    onChange={handleChange} 
                    placeholder='Subject' />
            </InputField>
            <InputField>
                <label>Message</label>
                <textarea 
                    name='message' 
                    value={inputs.message} 
                    onChange={handleChange} 
                    placeholder='Your Message'
                    style={{resize: 'none', height: '150px'}} />
            </InputField>
            {sent ? <p style={{color: 'green'}}>Sent Successfully.  Thank you for contacting us!</p> : null}
            <button>Send Message</button>
        </Form>
    )
}

export default ContactForm
