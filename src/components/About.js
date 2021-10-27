import React from 'react'
import styled from 'styled-components'

import ReviewSection from './ReviewSection'
import StatCard from './StatCard'

const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`

const Banner = styled.div`
    margin: 32px 0px;
`

const Stats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media(max-width: 700px){
        display: grid;
        grid-template-columns: 1fr;
        height: 300px;
    }
`

const InfoSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 32px;
    justify-items: center;

    @media(max-width: 700px){
        grid-template-columns: 1fr;
    }
`

function About() {

    return (
        <div>

            <Header>
                <Banner>
                    <h2 style={{margin: '0', textAlign: 'center', fontSize: '38px'}}>About Us</h2>
                    <p style={{padding: '0 16px', textAlign: 'center'}}>Our goal is to find the perfect Job for you and make connections between <br /> Employers and Candidates as smooth as possible</p>
                </Banner>
                <Stats>
                    <StatCard start={0} limit={15} time={75} description={'Years in Business'} />
                    <StatCard start={0} limit={12} symbol={'K'} time={100} description={'Satisfied Customers'} />
                    <StatCard start={0} limit={99} symbol={'%'} time={15} description={'Success Rate'} />
                </Stats>
            </Header>
            <ReviewSection />
            <InfoSection>
                <div>
                    <h5>Learn more about us</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus at eros eu molestie. Aenean condimentum augue quam, et luctus lectus viverra at. Suspendisse finibus imperdiet sem, sed semper mi egestas in. Curabitur vitae eros hendrerit, egestas leo quis, feugiat risus. Aliquam venenatis lectus luctus ante gravida.
                    </p>
                </div>
                <iframe width="360" height="315"src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
            </InfoSection>
        </div>
    )
}

export default About