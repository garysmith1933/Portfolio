const mealFinder = require('../assets/mealfinder.png')
const viz= require('../assets/Viz.png')

export const Work = () => {
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
                    <p className='project-description'> A react application made to help me and my wife decide what our next meal is going to be by providing recipe suggestions from the Spoontacular API.</p>
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
                    <b>React, Express, Node.js, P5.js, Google OAuth 2.0, AWS S3</b>

                    <div className='project-links'>
                        <a className='demo-link'href='https://viz.onrender.com/' target='_blank'>Website</a>
                        &nbsp;  &nbsp;
                        <a className='github-link' href='https://github.com/garysmith1933/Viz' target='_blank'>Github</a>  
                    </div>
                </div>
                <img className='project-image viz' src={viz} alt=''/>   
            </div>
        </div>
    )
}