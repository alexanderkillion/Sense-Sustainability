import React from 'react'
import styled from 'styled-components'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Review = styled.div`
    height: 350px;
    width: 100%;
    border-radius: 5%;
    background-color: white;
    margin: 16px;
    padding: 16px;

    @media(min-width: 600px){
        width: 350px;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr;
    height: 100%;
`

const Desc = styled.div`
    padding: 8px;
`

const Author = styled.div`
    display: grid;
    padding: 8px;
`

const SwitchCard = styled.div`
    display: flex;
    justify-content: center;
`

function ReviewCard(props) {
    
    const {description, name, location, imgUrl} = props.reviewInfo
    
    return (
        <Review>
            <Content>
                <Desc>
                    <FormatQuoteIcon style={{fontSize: '82px', color: '#303af7', transform: 'rotate(180deg)'}}/>
                    <p>{description}</p>
                </Desc>
                <Author>
                    <AccountCircleIcon style={{fontSize: '60px'}} />
                    <span>{name}</span>
                    <sub>{location}</sub>
                </Author>
                <SwitchCard>
                    <span>
                        {props.cardSort}
                    </span>
                </SwitchCard>
            </Content>
        </Review>
    )
}



export default ReviewCard