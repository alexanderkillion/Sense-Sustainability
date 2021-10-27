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
    padding: 32px 0px;

    li {
        height: 100%;
        width: 90%;
        display: grid;
        place-items: center;
        text-align: center;
        font-size: 16px;
        padding: 8px;

        :first-child{
            border-right: 1px solid black;
        }

        :last-child{
            border-left: 1px solid black;
        }

        > :first-child {
            color: blue;
            font-size: 56px;
        }
    }

    @media(max-width: 700px){
        grid-template-columns: 1fr;
        
        li {

            :first-child{
                border-right: none;
                border-bottom: 1px solid black;
            }
    
            :last-child{
                border-left: none;
                border-top: 1px solid black;
            }
        }
    }
`

function AboutHeader(props) {
    return (
        <div style={{borderBottom: '1px solid black'}}>
            <Banner>
                <h2>{props.title}</h2>
            </Banner>
            <CardContainer>
                <li>
                    <FaRegAddressCard />
                    <h5>Address</h5>
                    <p>121 King Street, Melbourne Victoria 3000 Australia​</p>
                </li>
                <li>
                    <HiOutlineMail />
                    <h5>Email</h5>
                    <p>info@cariera.com</p> 
                </li>
                <li>
                    <MdPhoneIphone />
                    <h5>Phone Number</h5>
                    <p>+61 3 8376 6284</p>
                </li>
            </CardContainer>
        </div>
    )
}

export default AboutHeader
