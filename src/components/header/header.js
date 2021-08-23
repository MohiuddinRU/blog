import proImage from './proImage.jpg';

function Image ( props ) {
    <img 
        className = "Image"
        src = { props.user.image } 
        alt = { props.user.imageTitle } 
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

function Link(props) {
    
}

function QuickDescription(){

}

function Header(){
    return(
        <div>
            <Image image = { proImage } />
            <ResumeTitle name = "Md. Mohiuddin" 
                         title = "Full Stack Developer" 
            />
            <QuickDescription />
        </div>
    ) 
}
