const mealFinder = require('../assets/mealfinder.png')
const viz = require('../assets/Viz.png')
const knowMe = require('../assets/knowme.png')

export const Projects = () => {
    return (
        <div className='work-container'>
            <div className='section-header'>
                <h1 className='about-title'>Projects</h1>
                <div className='line'></div>
            </div>

            <div className='projects project1'>
                <img className='project-image' src={mealFinder} alt=''/>
                <div className='project-info'>
                    <div className='top left'></div>
                    <div className='bottom right'></div>

                    <h2 className='project-title'>Mealfinder</h2>
                    <p className='project-description'> A react application made to help users decide what our next meal is going to be.</p>
                    <b>React, Express, Node.js, Material-UI, Spoontacular API.</b>
                    <div className='project-links'> 
                        <a className='demo-link' href='https://meal-finder-jbsl.onrender.com/' target='_blank'>Website</a>
                        &nbsp;  &nbsp;
                        <a className='github-link' href='https://github.com/garysmith1933/MealFinder' target='_blank'>Github</a>
                    </div> 
                </div>   
            </div>

            <div className='projects'>
                <div className='project-info'>
                    <div className='top left'></div>
                    <div className='bottom right'></div>

                    <h2 className='project-title'>Viz</h2>
                    <p className='project-description'>An intereactive audio visualizer that allows users to play their favorite songs while changing the speed, rotation and color of the visualizer at will. </p>
                    <b>React, Express, Node.js, P5.js</b>

                    <div className='project-links'>
                        <a className='demo-link'href='https://viz.onrender.com/' target='_blank'>Website</a>
                        &nbsp;  &nbsp;
                        <a className='github-link' href='https://github.com/garysmith1933/Viz' target='_blank'>Github</a>  
                    </div>
                </div>
                <img className='project-image viz' src={viz} alt=''/>   
            </div>

            <div className='projects'>
                <img className='project-image viz' src={knowMe} alt=''/> 
                <div className='project-info'>
                    <div className='top left'></div>
                    <div className='bottom right'></div>

                    <h2 className='project-title'>Know Me</h2>
                    <p className='project-description'> A quiz thats about me! Find out other things about me thats not mentioned anywhere else. </p>
                    <b>React, PostgreSQL, Flask</b>

                    <div className='project-links'>
                        <a className='demo-link'href='https://knowme.onrender.com/' target='_blank'>Website</a>
                        &nbsp;  &nbsp;
                        <a className='github-link' href='https://github.com/garysmith1933/KnowMe' target='_blank'>Github</a>  
                    </div>
                </div>  
            </div>
        </div>
    )
}