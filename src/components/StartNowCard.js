import React from 'react'
import styled from 'styled-components'

const StartCard = styled.div`
    margin: ${props => props.theme.margin};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 8px;
    box-shadow: 5px 5px 5px grey;
    background-color: white;

    @media(max-width: 1024px){
        width: 300px;
    }

    @media(max-width: 600px){
        width: 100%;
        margin: 8px;
    }
`

function StartNowCard(props) {

    const {icon, title, description, theme} = props

    return (
        <StartCard theme={theme}>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </StartCard>
    )
}

export default StartNowCard
