import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.png"
import "./about.css"
import german from "./3.png"


const About = () => {
  return (
    <>
      <section className='about'>
        
    
        <Back name='WARG' title='About Wicked Awesome Research Group' cover={img} />
        
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='About ' subtitle='Check out our company story and work process' />
            
            <img src={german} className="german" alt="german" ></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nisi quidem sint eius quos corrupti, perferendis unde at. Ipsam saepe error, quos iste enim temporibus voluptatum ea harum inventore neque!</p>
            
          </div>
          
        </div>
      </section>
    </>
  )
}

export default About