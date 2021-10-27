import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
`

function StatCard(props) {

    const {start, limit, symbol, time, description} = props
    
    const [count, setCount] = useState(start)

    function increment(limit, time){
        const interval = setInterval(() =>  {
            setCount(prevCount => {
                let newCount = prevCount + 1 
                if(newCount === limit){
                    clearInterval(interval)
                }
                return newCount
            })
        }, time)
    }

    useEffect(() => {
        increment(limit, time)
    }, [])
    
    return (
        <Card>
            <h2 style={{margin: '0'}}>{count}{symbol && symbol}</h2>
            <h3 style={{margin: '0', textAlign: 'center'}}>{description}</h3>
        </Card>
    )
}

export default StatCard
