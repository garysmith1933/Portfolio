
export const Navbar = () => {

    const toggleNav = () => {
        const nav = document.querySelector('.nav-items')
        const toggle = document.querySelector('.nav-toggle')
        const isVisible = nav.getAttribute('data-visible')
        const background = document.querySelector('#welcome-container')
    
        if(isVisible === 'true') {
            nav.setAttribute('data-visible', 'false')
            toggle.setAttribute('aria-expanded', 'false')
            background.classList.remove('blur')
        }

        else {
            nav.setAttribute('data-visible', 'true')
            toggle.setAttribute('aria-expanded', 'true')
            background.classList.add('blur')
        }

        console.log(toggle.getAttribute('aria-expanded'))
    }

    return (
         <div className='navbar'> 
            <div className='nav-logo'>GS</div>

            <button aria-controls='nav-items' aria-expanded='false' className='nav-toggle' onClick={() => toggleNav()}>
                <span className='sr-only'></span>
            </button>

            <nav>
                <ul id='nav-items' className='nav-items' data-visible='false'>   
                    <li className='nav-item navItem-underline'> <span>01</span> About</li>
                    <li className='nav-item navItem-underline'> <span>02</span> Work</li>
                    <li className='nav-item navItem-underline'> <span>03</span> Contact</li>
                    <li className='nav-item navItem-underline'> <span>04</span> Resume</li>
                </ul>
            </nav>
            
        </div>       
    )
}