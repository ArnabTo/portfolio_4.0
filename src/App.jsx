import './App.css'
import CustomCursor from './CustomCursor'
import NavBar from './pages/Nav'
import Home from './pages/Home'
import Service from './pages/Service'
import MyWorks from './pages/work'
import AboutMe from './pages/About.jsx'
import StaticSlide from './pages/StaticSlide'
import TestiMonial from './pages/Testimonial'
import Contact from './pages/Contact'
import Education from './pages/Education'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Service/>
      <MyWorks/>
      <AboutMe/>
      <StaticSlide/>
      <Education/>
      <TestiMonial/>
      <Contact/>
      <CustomCursor/>
    </div>
  )
}

export default App
