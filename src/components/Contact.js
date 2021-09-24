import React from 'react'
import AboutHeader from './AboutHeader'
import ContactForm from './ContactForm'

function Contact() {
    return (
        <>
           <AboutHeader title={"Contact Us"} />
            <div>
                <h2 style={{textAlign: 'center'}}>Contact Us</h2>
                <ContactForm />
            </div>
        </>
    )
}

export default Contact
