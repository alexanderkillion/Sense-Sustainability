import React from 'react'
import styled from 'styled-components'
import { basics, listSub, privacy } from './data/data'
import AboutHeader from './AboutHeader'
import ExpansiveContent from './ExpansiveContent'

const Content = styled.div`
    display: grid;
    grid-template-columns: 300px 300px;
    gap: 9rem;
    padding-top: 4rem;
    padding-left: 16rem;
    overflow: hidden;

    @media(max-width: 700px){
        grid-template-columns: 1fr;
        padding-left: 1rem;
    }
`;

const List = styled.ul`
    color: grey;
    font-size: .8rem;
    margin-bottom: 4rem;

    @media(max-width: 700px) {
        width: 80vw
    }
`;

const Text = styled.p`
    color: grey;

    @media(max-width: 700px) {
        width: 90vw
    }
`

const Button = styled.button`
    background-color: blue;
    border: none;
    color: white;
    padding: .5em 1.5em;
    border-radius: .2rem;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
`;

const Help = styled.div`
    background-color: #303AF7;
    padding: 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;

    @media(max-width: 700px) {
        max-width: 100%;
        overflow: hidden;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        justify-items: center;
        padding-left: 40px;
    }
`;

const HelpContainer = styled.div`
    color: white;
    padding-left: 13.5rem;

    @media(max-width: 700px) {
        overflow: hidden;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        justify-items: center;
        padding-left: 0px;
    }
`;

const HBtn = styled.a`
    padding: .7em 1.5em;
    border: none;
    border-radius: .2rem;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 28rem;
    background-color: rgba(255, 255, 255, 0.15);
    text-decoration: none;
    :link, :visited{
        color: white
    }
    :hover {
        color: blue;
        background-color: white;
        transition: 200ms; 
    }

    @media(max-width: 700px) {
        margin-left: 0;
        padding: .7em 1.5em;
        height: 1.5rem;
    }
`

function FAQ() {
    return (
        <>
            <AboutHeader title={"FAQ"} />
            <Content>
                <div>
                    <div>
                        <h3>Basic</h3>
                        <List>
                            {basics.map(({title, content}) => (
                                <ExpansiveContent title={title} content={content}/>
                            ))}
                        </List>
                    </div>
                    <div>
                        <h3>Listing Submission</h3>
                        <List>
                            {listSub.map(({title, content}) => (
                                <ExpansiveContent title={title} content={content}/>
                            ))}
                        </List>
                    </div>
                    <div>
                        <h3>Privacy</h3>
                        <List>
                            {privacy.map(({title, content}) => (
                                <ExpansiveContent title={title} content={content}/>
                            ))}
                        </List>
                    </div>
                </div>
                <div>
                    <div style={{width: '450px'}}>
                        <h3>Presale Question</h3>
                        <Text>
                        Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id. Allamco laboris nisi ut aliquip ex ea commodo consequat. Aser velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum. Allamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                        <Button onClick={() => window.scrollTo(0, 0)}>Contact Us</Button>
                    </div>
                    <div style={{width: '450px'}}>
                        <h3>Found a Bug?</h3>
                        <Text>
                        Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id. Allamco laboris nisi ut aliquip ex ea commodo consequat. Aser velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum. Allamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </div>
                </div>
            </Content>
            <Help>
                <HelpContainer>
                    <h2 style={{ marginBottom: '0'}}>Still need help?</h2>
                    <p style={{ marginTop: '0.3rem'}}>Check out our detailed documentation</p>
                </HelpContainer>
                <HBtn href='https://docs.cariera.co/' target='blank'>Knowledge Base</HBtn>
            </Help>
        </>
    )
}

export default FAQ