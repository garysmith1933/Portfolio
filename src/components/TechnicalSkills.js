const code = require('../assets/code.png')

export const TechnicalSkills = () => {
    return (
        <div className='facts'>
        <div className='facts-content'>
            <img src={code} alt='Skills'/>
            <h2 style={{marginTop: '16px'}}>I got skills!</h2>
            <p className='fact-text'>My technical skills include, <b>Javascript, React, Redux, Node.js, and PostgreSQL.</b></p> 
        </div>
    
    
    </div>
    )
}