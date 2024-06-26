import { useContext, useEffect } from "react"
import React from 'react'
import noteContext from "../context/notes/noteContext"


function About() {
  const a =useContext(noteContext)
  useEffect(() => {
    a.update()
  },[])
  return (
    <div>
     This is about {a.state.name} and in {a.state.class}
    </div>
  )
}

export default About
