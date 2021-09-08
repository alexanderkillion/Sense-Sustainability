import React from 'react'
import styled from 'styled-components'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import JobCard from './JobCard'

const Section = styled.div`
    display: grid;
    margin: 8px;
    padding: 8px;
`

const Header = styled.div`
    width: 100%;
    text-align: center;
`

const Content = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`

const Footer = styled.div`
    display: grid;
    place-content: center;
`

const NavContainer = styled.div`
    display: flex;
    width: 180px;
    justify-content: space-evenly;
`

const NavButton = styled.div`
    box-sizing: border-box;
    background-color: #303af7;
    color: white;
    height: 30px;
    width: 40px;
    border-radius: 10%;
    display: grid;
    place-items: center;

    :hover {
        background-color: white;
        border: 2px solid #303af7;
        color: #303af7
    }
`

function JobSection() {

    const data = [
        {
            jobTitle: 'BioChemist',
            company: 'AbbVie',
            location: 'Scranton, PA',
            positionType: 'On-Site, Full-Time'
        },
        {
            jobTitle: 'Biology Research Student',
            company: 'University of Iowa',
            location: 'Iowa City, IA',
            positionType: 'On-Site, Part-Time'
        },
        {
            jobTitle: 'Clinical Trial Associate',
            company: 'Johnson & Johnson',
            location: 'Newark, NJ',
            positionType: 'On-Site, Full-Time'
        },
        {
            jobTitle: 'Chemistry Research Student',
            company: 'Yale University',
            location: 'New Haven, CT',
            positionType: 'On-Site, Part-Time'
        },
        {
            jobTitle: 'Animal Behavior Associate',
            company: 'Seattle Zoo',
            location: 'Seattle, WA',
            positionType: 'On-Site, Full-Time'
        },
        {
            jobTitle: 'Speech Therapy Associate',
            company: 'Williams & Wilks Counseling',
            location: 'Omaha, NB',
            positionType: 'Remote, Full-Time'
        }
    ]

    return (
        <Section>
            <Header>
                <h3>Latest Jobs</h3>
            </Header>
            <Content>
                {data.map(job => <JobCard jobInfo={job} />)}
            </Content>
            <Footer>
                <NavContainer>
                    <NavButton>1</NavButton>
                    <NavButton>2</NavButton>
                    <NavButton><ArrowRightAltIcon /></NavButton>
                </NavContainer>
            </Footer>
        </Section>
    )
}

export default JobSection