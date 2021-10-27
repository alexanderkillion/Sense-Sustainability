import React from 'react'
import styled from 'styled-components'
import About from './About'

import AboutHeader from './AboutHeader'
import ExpansiveContent from './ExpansiveContent'

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 16px;

    @media(max-width: 700px){
        grid-template-columns: 1fr;
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
                        <ul>
                            <ExpansiveContent title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} />
                            <ExpansiveContent title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} />
                            <ExpansiveContent title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} />
                            <ExpansiveContent title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} />
                        </ul>
                    </div>
                    <div>
                        <h3>Listing Submission</h3>
                        <ul>
                            <ExpansiveContent title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} />
                            <ExpansiveContent title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} />
                            <ExpansiveContent title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} />
                            <ExpansiveContent title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} />
                        </ul>
                    </div>
                    <div>
                        <h3>Privacy</h3>
                        <ul>
                            <ExpansiveContent title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} />
                            <ExpansiveContent title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} />
                            <ExpansiveContent title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} />
                            <ExpansiveContent title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} />
                        </ul>
                    </div>
                </div>
                <div>
                    <div style={{width: '300px'}}>
                        <h3>Presale Question</h3>
                        <p>
                        Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id. Allamco laboris nisi ut aliquip ex ea commodo consequat. Aser velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum. Allamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div style={{width: '300px'}}>
                        <h3>Found a Bug?</h3>
                        <p>
                        Asunt in anim uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id. Allamco laboris nisi ut aliquip ex ea commodo consequat. Aser velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum. Allamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </Content>
        </>
    )
}

export default FAQ
