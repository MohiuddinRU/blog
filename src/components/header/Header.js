import React from 'react';

import './Header.css';
import proImage from './proImage.jpg';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function UserImage ( props ) {
    return(
        <img className="UserImage"
            src = { props.src} 
            alt = { props.title} 
        />
    )
}

function ResumeTitle( props ) {
    return(
        <div className="Title"> 
            <h1> { props.name} </h1>
            <h2> { props.title} </h2>
        </div>
    )
}

function Location(props){
    return(
        <div className = "Location">
            <div> { props.location } </div>
            <LocationOnIcon />
        </div>
    )
}

function Link( props ) {
    return(
        <div className="Link">
            <a href = { props.href } title = {props.title} > { props.title } </a>
            <div> { props.children } </div>
        </div>
    )
}

function QuickDesciption(){
    return(
        <div className = "QuickDesciption">
            <Link href = "mailto:mohiuddin.ice.ru@gmail.com" 
                  title = "mohiuddin.ice.ru@gmail.com"> 
                    <EmailIcon fontSize = "small" />
            </Link>

            <Link href="tel:+8801752504400" 
                  title = "+8801752504400" >
                    <PhoneIcon fontSize = "small" />
            </Link>

            <Link href="https://github.com/MohiuddinRU" 
                  title = "github.com/MohiuddinRU">
                    <GitHubIcon fontSize = "small" />
            </Link>

            <Location location = "Rajshahi, Bangladesh"/>

            <Link href="https://www.linkedin.com/in/mohiuddinru/" 
                  title = "linkedin.com/in/mohiuddinru/">
                    <LinkedInIcon fontSize = "small" />
            </Link>

        </div>
    )
}

export default function Header(){
    return(
        <div className = "Header">

            <UserImage 
                   src = { proImage } 
                   title = "User photo" />

            <ResumeTitle 
                         className = "ResumeTitle"
                         name = "Md. Mohiuddin" 
                         title = "Full Stack Developer" 
            />
            <QuickDesciption />
        </div>
    ) 
}
