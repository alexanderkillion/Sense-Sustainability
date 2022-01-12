import React, { useState } from 'react'
import styled from 'styled-components'
import ReviewCard from './ReviewCard'

const Section = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                  url('https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80');
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, .9);
    height: 500px;
    margin: 8px 0;
    display: flex;
    align-items: center;
`

const data = [
    {
        description: 'Such a great website!  Uploaded my resume, and I got employed fast. Thanks ResearchNeeds.org!',
        imgUrl: 'AbbVie',
        location: 'Facebook',
        name: 'Luke Henson'
    },
    {
        description: 'Biology Research Student',
        imgUrl: 'University of Iowa',
        location: 'Iowa City, IA',
        name: 'On-Site, Part-Time'
    },
    {
        description: 'Clinical Trial Associate',
        imgUrl: 'Johnson & Johnson',
        location: 'Newark, NJ',
        name: 'On-Site, Full-Time'
    }
]

function ReviewSection() {
    const [reviewCardNum, setReviewCardNum] = useState(0)
    const cardSort = data.map( info => {
        if(data.indexOf(info) === reviewCardNum){
            return <input type="radio" value={data.indexOf(info)} name="reviewCardNum" onClick={() => setReviewCardNum(data.indexOf(info))} checked/>
        } else {
            return <input type="radio" value={data.indexOf(info)} name="reviewCardNum" onClick={() => setReviewCardNum(data.indexOf(info))}/>
        }
    })
    return (
        <Section>
            <ReviewCard reviewInfo={data[reviewCardNum]} cardSort={cardSort}/>
        </Section>
    )
}

export default ReviewSection