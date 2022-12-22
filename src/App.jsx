import Header from "./components/Header"
import Banner from "./components/Banner"
import SobreMi from "./components/SobreMi"
import Proyectos from "./components/Proyectos"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

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

