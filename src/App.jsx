import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import LearnSkill from './Components/LearnSkill'
import Course from './Components/Course'
import OnlineLearn from './Components/OnlineLearn'
import Catagories from './Components/Catagories'
import Exceptional from './Components/Exceptional'

function App() {
  return (
    <div className=''>
        <Navbar/>
        <Hero/>
        <LearnSkill/>
        <Course/>
        <OnlineLearn/>
        <Catagories/>
        <Exceptional/>
    </div>
  )
}

export default App