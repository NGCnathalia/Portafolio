import Header from "./components/header/Header"
import Banner from "./components/banner/Banner"
import SobreMi from "./components/about/SobreMi"
import Proyectos from "./components/projects/Proyectos"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

//rfce para crear un componente basico 
function App() {

  return (
    <div>
      <a id="Inicio"></a>
      <Header/>
      <Banner/>
      <a id="SobreMi"></a>
      <SobreMi/>
      <a id="Proyectos"></a>
      <Proyectos/>
      <a id="Contact"></a>
      <Contact/>
          <Footer/>
    </div>

  )
}

export default App

