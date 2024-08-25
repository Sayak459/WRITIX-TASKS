
import React from 'react'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
  return (
    <>
      <Layout/>
      <div className="container">
      <NavBar/>
      <Projects/>
      <About/>
      </div>
    </>
  )
}

export default App