export const Welcome = ({scrollToSection, WorkRef}) => {
   return (
    <div className='greeting-container'>
        <h4 className="greeting-intro">Hi! My name is <span className='greeting-name'>Gary!</span> Yes, like the snail.</h4>
        <h1 className="greeting-detail">I enjoy making websites.</h1>
        <div className='button' onClick={() => scrollToSection(WorkRef)}>See my work</div>
    </div>
   )
}