import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"


const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>The best way to help your money grow</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
      
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 Wicked Awesome Research Group. Designd By Cynthia Alanis.</span>
      </div>
    </>
  )
}

export default Footer