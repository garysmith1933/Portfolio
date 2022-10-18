const github = require('../assets/github.png')
const linkedin = require('../assets/linkedin.png')

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className='socials'>
                <a href='https://github.com/garysmith1933' target='_blank'>
                  <div className='github-container'><img className='github' src={github}/></div>
                </a>
               
               <a href='https://www.linkedin.com/in/garysmith1933/' target='_blank'>
                 <div className='linkedin-container'><img className='linkedin' src={linkedin}/></div>
               </a>
                
            </div>
            <a className='footer-text' href='https://github.com/garysmith1933/Portfolio' target='blank_'>Designed and Developed by Gary Smith</a>
        </div>
    )
}