import {Facts} from './Facts'
import { TechnicalSkills } from './TechnicalSkills'
const boxing = require('../assets/boxing.png')
const book = require('../assets/book.png')

export const About = () => {
    return (
        <div className='about-container'>
            <div className='section-header'>
                <h1 className='about-title'>About</h1>
                <div className='line'></div>
            </div>
           
            <div className='about-story'>
                <div className='top left'></div>
                <div className='bottom right'></div>
                 <p className='story'> 
                 Prior to coding, I spent years searching for the right outlet to express my creativity. Acting, voice acting, even content creation on Twitch and Youtube once upon a time. 
                 When I started to learn how to code, I was shocked by how addicted I became. It reminded me of playing video games, which is my main hobby. I loved being able to solve complex problems and the sense of accomplishment I got as I learned and built new skills. 
                 It was all I could ask for! I'm now currently looking for a company to grow with as a full stack web developer.
                </p>

                <p className='story'> When i'm not coding you can find me playing video games, cooking, or being forced to feed my two cats...by my two cats. </p>
            </div>

            <div className='facts-container'>
                <Facts image={boxing} title={"I have grit!"} text={"When things get tough, I’m not one to back down."}/>
                <TechnicalSkills/>
                <Facts image={book} title={"I'm always learning!"} text={"I am always working and looking for ways to improve - both as a developer and a person."}/>
            </div>
        </div>
    )
}