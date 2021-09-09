import React from 'react'
import styled from 'styled-components'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const Job = styled.div`
    height: 270px;
    width: 250px;
    border: 1px solid #948A99;
    display: grid;
    grid-template-rows: 2fr 1fr;
    margin: 8px;
    border-radius: 2%;
`

const JobContent = styled.div`
    width: 100%;
    display: grid;
    place-content: center;
    background: linear-gradient(#EBECF0, #ffffff);
    text-align: center;
`

const JobFooter = styled.div`
    border-top: 1px solid #948A99;
    width: 100%;
    display: grid;
    place-content: center;
    background-color: #EBECF0;
    text-align: center;
`

function JobCard(props) {

    const {jobTitle, company, location, positionType} = props.jobInfo

    return (
        <Job>
            <JobContent>
                <AssignmentIndIcon style={{width: '100%'}}/>
                <h4>{jobTitle}</h4>
                <sub>{company}</sub>
            </JobContent>
            <JobFooter>
                <span><strong>{location}</strong></span>
                <span>{positionType}</span>
            </JobFooter>
        </Job>
    )
}

export default JobCard