import proImage from './proImage.jpg';

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
            <Image />
        </div>
    )
}

function QuickDescription(){
    <Link />
}

function Header(){
    return(
        <div>
            <Image src = { proImage } />
            <ResumeTitle name = "Md. Mohiuddin" 
                         title = "Full Stack Developer" 
            />

            <QuickDescription />
        </div>
    ) 
}
