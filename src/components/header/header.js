import proImage from './proImage.jpg';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Image ( props ) {
    <img 
        className = "Image"
        src = { props.image } 
        alt = { props.imageTitle } 
    />
}

function ResumeTitle( props ) {
    return(
        <div> 
            <h1> { props.name} </h1>
            <h2> { props.title} </h2>
        </div>
    )
}

function Location(props){
    return(
        <div>
            <img src = { props.src } alt = { props.description } />
        </div>
    )
}

function Icon( props ){
    return(
        <img src = { props.src } alt = { props.description } />
    )
}

function Link(props) {
    return(
        <div>
            <a target = "_blank" rel = "noreferrer" href = { props.link }>  </a> 
            <EmailIcon fontSize = { small } />
        </div>
    )
}

function QuickDescription(){
    <Link />
}

function Header(){
    return(
        <div>
            <Image src = { proImage } title = "User photo" />
            <ResumeTitle name = "Md. Mohiuddin" 
                         title = "Full Stack Developer" 
            />

            <QuickDescription />
        </div>
    ) 
}
