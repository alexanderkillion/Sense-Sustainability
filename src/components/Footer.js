import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.footer`
    height: 8vh;
    display: flex;
    padding: 16px;
    align-items: center;
    background-color: black;
    color: gray;

    @media (max-width: 700px){
        max-width: 100%;
        font-size: 1rem;
        align-content: center;
    } 
`
const FooterContent = styled.h6`
    width: fit-content;
    margin-left: 15rem;

    @media (max-width: 700px){
        width: 200px;
    }
`;

function Footer() {
    return (
        <FooterSection>
            <FooterContent>Copyright © Research Needs</FooterContent>
        </FooterSection>
    )
}

export default Footer
