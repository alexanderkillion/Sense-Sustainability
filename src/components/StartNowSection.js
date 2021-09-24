import React from 'react'
import styled from 'styled-components'

import StartNowCard from './StartNowCard';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Section = styled.div`
    padding: 8px 64px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    background-color: #F6F6F6;
    @media(max-width: 1024px){
        grid-template-columns: 1fr;
        padding: 8px;
    }
`

const HeaderContainer = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    font-size: 85px;
    margin: 0;
    @media(max-width: 770px){
        font-size: 62px;
    }
`

const Description = styled.p`
    font-size: 30px;
    color: blue;
`

const Link = styled.a`
    text-decoration: none;
    height: 44px;
    width: 160px;
    background-color: blue;
    display: grid;
    place-items: center;
    color: white;
    border-radius: 5px;
    transition: .2s;

    :hover{
        filter: brightness(200%)
    }
`

const CardContainer = styled.div`
    padding: 16px 0px;
    display: grid;
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 8px;
    place-items: center;
    @media(max-width: 600px){
        grid-template-columns: 1fr;
    }
`

function StartNowSection() {

    const startCardData = [
        {
            icon: <PersonOutlineIcon />,
            title: 'Register',
            description: 'Sign up as an Employer or a Candidate for free.'
        },
        {
            icon: <SearchIcon />,
            title: 'Search',
            description: 'Browse through open positions to find the right job for you.'
        },
        {
            icon: <SendOutlinedIcon />,
            title: 'Apply',
            description: 'Apply to a job with your resume and change your Career.'
        },
        {
            icon: <StarBorderIcon />,
            title: 'Succeed',
            description: 'Get hired and change your starting now!'
        }
    ]

    function marginOffset(index){
        if(index === 0 || index === 2){
            return '-20px 8px 8px 8px'
        } else {
            return '8px 8px 8px'
        }
    }

    return (
        <Section>
            <HeaderContainer>
                <Title>Start now</Title>
                <Description>Tips and Tricks on how to succeed</Description>
                <Link>Learn More</Link>
            </HeaderContainer>
            <CardContainer>
                <GridContainer>
                    {startCardData.map((data, index) => <StartNowCard icon={data.icon} title={data.title} description={data.description} theme={{margin: marginOffset(index)}} />)}
                </GridContainer>
            </CardContainer>
        </Section>
    )
}

export default StartNowSection
