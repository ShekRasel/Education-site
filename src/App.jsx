import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import LearnSkill from './Components/LearnSkill'
import Course from './Components/Course'
import OnlineLearn from './Components/OnlineLearn'
import Catagories from './Components/Catagories'
import Exceptional from './Components/Exceptional'
import Instructor from './Components/Instructor'
import StudentsSpeach from './Components/StudentsSpeach';
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

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
        <Instructor/>
        <StudentsSpeach/>
        <Blog/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App