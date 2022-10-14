export const Facts = ({image, title, text}) => {
    return (
        <div className='facts'>
            <div className='facts-content'>
                <img src={image} alt='I dont quit'/>
                <h3 style={{marginTop: '16px'}}>{title}</h3>
                <p>{text}</p> 
            </div>
        
        
        </div>
    )
}