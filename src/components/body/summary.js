import React from 'react';
import './summary.css'

function Title ( props ) {
    return(
        <h2> { props.heading} </h2>
    )
}

function Text( props ) {
    return(
        <div> 
            <p> { props.text } </p>
        </div>
    )
}

const summaryText = "A web application developer passionate about mathematical and algorithmic problem solving. One thing that characterize me well is,'Throw me a problem and a single day and you will find me to have some ideas to crack the problem.";

export default function Summary() {
    return(
        <div className = "Summary">
            <Title heading = "Summary" />
            <Text text = { summaryText } />
        </div>
    )
}
