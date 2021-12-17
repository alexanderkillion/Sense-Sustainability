import React from 'react'
import styled from 'styled-components'

import { HiOutlineMail } from 'react-icons/hi'
import { FaRegAddressCard } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'

const Banner = styled.div`
    background-color: #f6f6f6;
    padding: 72px 0px;
    display: grid;
    place-items: center;
`

const CardContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 32px 140px;

    li {
        height: 80%;
        width: 90%;
        display: grid;
        place-items: center;
        text-align: center;
        font-size: 16px;
        padding: 8px;

        :first-child{
            border-right: 1px solid #E3E3E3;
        }

        :last-child{
            border-left: 1px solid #E3E3E3;
        }

        > :first-child {
            color: blue;
            font-size: 56px;
        }
    }
    p {
        color: #948A99;
    }

    @media(max-width: 700px){
        grid-template-columns: 1fr;
        
        li {

            :first-child{
                border-right: none;
                border-bottom: 1px solid #E3E3E3;
            }
    
            :last-child{
                border-left: none;
                border-top: 1px solid #E3E3E3;
            }
        }
    }
`

function AboutHeader(props) {
    return (
        <div style={{borderBottom: '1px solid #E3E3E3'}}>
            <Banner>
                <h2>{props.title}</h2>
            </Banner>
            <CardContainer>
                <li>
                    <FaRegAddressCard />
                    <h4>Address</h4>
                    <p>121 King Street, Melbourne Victoria 3000 Australia​</p>
                </li>
                <li>
                    <HiOutlineMail />
                    <h4>Email</h4>
                    <p>info@cariera.com</p> 
                </li>
                <li>
                    <MdPhoneIphone />
                    <h4>Phone Number</h4>
                    <p>+61 3 8376 6284</p>
                </li>
            </CardContainer>
        </div>
    )
}

export default AboutHeader
