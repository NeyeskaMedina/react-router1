import './App.css'
import { Navigation } from "./assets/components/Navigation";
import { Routes, Route } from "react-router-dom";
import { Home } from "./assets/views/Home";
import { Contacto } from "./assets/views/Contacto";
import { NotFound } from "./assets/views/NotFound";

function App() {

  return (
    <>
      <Navigation />
      <Routes>
            <Route  
                path="/"
                element={<Home title="Bienvenido a Happy Cake" subTitle= "El lugar de los pasteles felices"/>}
            />
            <Route  
                path="/contacto"
                element={<Contacto title="Cuentanos, ¿En que podemos ayudar?"/>}
            />  
            <Route
                path="*"
                element={<NotFound />}
            />
      </Routes>
    </>
  )
}

export default App;
