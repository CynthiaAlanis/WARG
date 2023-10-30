import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"


import Team from "./team/Team"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Awards />
      <Team />
     
    </>
  )
}

export default Home