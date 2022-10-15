export const Facts = ({image, title, text}) => {
    return (
        <div className='facts'>
            <div className='facts-content'>
                <img src={image} alt='I dont quit'/>
                <h2 style={{marginTop: '16px'}}>{title}</h2>
                <p className='fact-text'>{text}</p> 
            </div>
        </div>
    )
}