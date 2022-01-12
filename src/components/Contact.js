import React from 'react'
import AboutHeader from './AboutHeader'
import ContactForm from './ContactForm'
import styled from 'styled-components'

const ContactPage = styled.div`
    padding-top: 80px;
`

function Contact() {
    return (
        <>
           <AboutHeader title={"Contact Us"} />
            <ContactPage>
                <h1 style={{textAlign: 'center'}}>Contact Us</h1>
                <p style={{color: '#948A99', textAlign:'center'}}>Feel free to contact us anytime if you have a question</p>
                <ContactForm />
            </ContactPage>
        </>
    )
}

export default Contact