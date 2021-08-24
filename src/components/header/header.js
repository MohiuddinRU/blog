import React from 'react';
import UserImage from './userimage';
import './header.css';
import QuickDescription from './quickdescription';

function ResumeTitle( props ) {
    return(
        <div className="Title"> 
            <h1> { props.name} </h1>
            <h2> { props.title} </h2>
        </div>
    )
}

export default function Header(){
    return(
        <div className = "Header">

            <UserImage  />
            <ResumeTitle 
                className = "ResumeTitle"
                name = "Md. Mohiuddin" 
                title = "Full Stack Developer" 
            />
            <QuickDescription />
        </div>
    ) 
}
