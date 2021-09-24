import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.footer`
    height: 15vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 16px;
    align-items: center;
    background-color: black;
    color: gray;
`

function Footer() {
    return (
        <FooterSection>
            <h6>Copyright © Research Needs</h6>
        </FooterSection>
    )
}

export default Footer
