import './App.scss'
import Header from './pages/Header/Header'
import HeroSection from './pages/HeroSection/HeroSection'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Portfolio from './pages/Portfolio/Portfolio'
import SayHello from './pages/SayHello/SayHello'
// import Testimonial from './pages/Testimonial/Testimonial'
import Form from './pages/Form/Form'
import Footer from './pages/Footer/Footer'
function App() {
  return (
    <div className="app">
        <Header/>
        <HeroSection/>
        <About/>
        <Skills/>
        <Portfolio/>
        <SayHello/>
        {/* <Testimonial/> */}
        <Form />   
        <Footer/>
    </div>
  );
}

export default App;
