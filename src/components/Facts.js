export const Facts = ({image, title, text}) => {
    return (
        <div className='facts'>
            <div className='facts-content'>
                <img src={image} alt='fact image'/>
                <h3 className='fact-title'>{title}</h3>
                <p className='fact-text'>{text}</p> 
            </div>
        </div>
    )
}