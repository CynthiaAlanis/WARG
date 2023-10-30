import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='SERVICES' subtitle='We  Can Help You With:' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured