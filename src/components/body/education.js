import React from 'react';
import './education.css';

const results = [
    {
        instituteInfo: "University of Rajshahi , Bangladesh",
        degreeInfo: "B.Sc. , Information and Communication Engineering , 2016-2020",
        result: "CGPA: 3.31/4.00"
    },
    {
        instituteInfo: "Sardah College, Rajshahi, Bangladesh",
        degreeInfo: "Higher Secondary School Cerficate Examination (HSC), Science, 2015",
        result: "GPA: 5.00/5.00"
    },
    {
        instituteInfo: "Sardah Government Pilot High School, Rajshahi , Bangladesh",
        degreeInfo: "Secondary School Certificate (SSC) Examination, Science , 2013.",
        result: "GPA: 5.00/5.00"
    }
]

function DegreeDetails( props ){
    return(
        <div>
            <h4> { props.instituteInfo }  </h4>
            <div> { props.degreeInfo } </div>
            <div> { props.result } </div>
        </div>
    )
}

export default function Eduction() {
    let degrees = [ ];

    for( let i = 0; i< results.length; i++){
        degrees.push( < DegreeDetails { ... results[i] } /> )
    }

    return(
        <div className = "Education">
            <h3> Education </h3>
            <div> { degrees } </div>
        </div>
    )
} 