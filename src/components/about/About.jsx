import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.png"
import "./about.css"


const About = () => {
  return (
    <>
      <section className='about'>
    
        <Back name='WARG' title='About Wicked Awesome Research Group' cover={img} />
        
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='About ' subtitle='Check out our company story and work process' />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            
          </div>
          
        </div>
      </section>
    </>
  )
}

export default About