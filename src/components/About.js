import {Facts} from './Facts'
import { TechnicalSkills } from './TechnicalSkills'
const boxing = require('../assets/boxing.png')
const book = require('../assets/book.png')

export const About = () => {
    return (
        <div className='about'>
            <div className='about-header'>
                <h1 className='about-title'>About</h1>
                <div className='line'></div>
            </div>
           
            <div className='about-story'>
                <div className='top left'></div>
                <div className='bottom right'></div>
                 <p className='story'> 
                    I spent years prior to coding, searching for the right outlet to express my creativity, acting, voice acting, and even content creation once upon a time.
                    So when I started to learn how to code back in May 2021, I was shocked by how I addicted I was to it. It reminded me so much of playing video games in a way(which is my main hobby), being able to solve complex problems, and giving me a sense of a accomplishment as I learn and build new things. It was all I can ask for!  
                    A handful of Udemy courses, Fullstack Academy, and some side projects later, here I am actively looking for a company to grow with as a full stack web developer. 
                </p>

                <p className='story'> When i'm not coding you can find me playing video games, cooking, or being forced to feed my two cats...by my two cats. </p>
            </div>

            <div className='facts-container'>
                <Facts image={boxing} title={"I have grit!"} text={"When things get tough, I'm not one to back down so easily."}/>
                <TechnicalSkills/>
                <Facts image={book} title={"I'm always learning!"} text={"I am always working to improve, both as a developer, and as a person."}/>
            </div>
        </div>
    )
}