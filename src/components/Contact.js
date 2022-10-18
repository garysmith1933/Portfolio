
export const Contact = ({scrollToSection, HomeRef}) => {
    return (
        <div className='contact-container'>
            <div className='section-header'>
                <h1 className='about-title'>Contact</h1>
                <div className='line'></div>
            </div>

            <div className='contact-content'>
                <p className='contact-text'>I'm currently open to new opportunities! Think I would be a great fit for your team or just want to say hi? Feel free to shoot me a message. I'm always happy to chat!</p>
                <div className='button cta'>
                    <a href='mailto:garysmith193358@gmail.com'>Lets talk!</a>
                </div>
            </div>

            <div className='arrow' onClick={() => scrollToSection(HomeRef)}>
            </div>
        </div>
    )
}