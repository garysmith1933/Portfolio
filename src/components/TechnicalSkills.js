const code = require('../assets/code.png')

export const TechnicalSkills = () => {
    return (
      <div className='facts'>
        <div className='facts-content'>
          <img src={code} alt='Skills'/>
          <h3 className='facts-title'>I got skills!</h3>
          <p className='fact-text'>My technical skills include, <b>HTML5, CSS3, Javascript, React, Redux, Java, Spring Boot, Docker, Typescript, Node.js, Express, Python, Flask, and PostgreSQL.</b></p> 
        </div>
    </div>
    )
}