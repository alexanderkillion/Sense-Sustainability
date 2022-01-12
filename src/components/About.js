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
    padding-top: 64px;
    padding-bottom: 64px;

    @media(max-width: 700px){
        display: grid;
        grid-template-columns: 1fr;
        height: 300px;
        padding-top: 64px;
        padding-bottom: 64px;
    }
`

const InfoSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 32px;
    justify-items: center;
    padding: 64px;
    padding-left: 160px;
    padding-right: 160px;

    @media(max-width: 700px){
        grid-template-columns: 1fr;
    }
`

const ThemeSection = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    background-color: #303AF7;
    color: #FFFFFF;
    padding: 24px;
    padding-right: 180px;
    padding-left: 180px;
    button {
        background-color: #303AF7;
        border: 1px solid #FFFFFF;
        border-radius: 3px;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
      
`

function About() {

    return (
        <div>

            <Header>
                <Banner>
                    <h2 style={{margin: '0', textAlign: 'center', fontSize: '38px'}}>About Us</h2>
                    <p style={{padding: '0 16px', textAlign: 'center', color: '#948A99'}}>Our goal is to find the perfect Job for you and make connections between <br /> Employers and Candidates as smooth as possible</p>
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
                    <p style={{color: '#948A99'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus at eros eu molestie. Aenean condimentum augue quam, et luctus lectus viverra at. Suspendisse finibus imperdiet sem, sed semper mi egestas in. Curabitur vitae eros hendrerit, egestas leo quis, feugiat risus. Aliquam venenatis lectus luctus ante gravida.
                    </p>
                </div>
                <iframe width="620" height="340"src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
            </InfoSection>
            <ThemeSection>
                <div>
                    <h2>#1 Job Board Theme</h2>
                    <h4>The perfect theme to build your own Job Board Website!</h4>
                </div>
                <a href="https://themeforest.net/item/cariera-job-board-wordpress-theme/20167356?irgwc=1&clickid=yQzXbuwkFxyIURlyXJ0JCyx0UkG2mOTuPxHezE0&iradid=275988&irpid=1334591&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1334591&utm_medium=affiliate&utm_source=impact_radius" target="_blank"><button>Buy Now!</button></a>
            </ThemeSection>
        </div>
    )
}

export default About