import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Coin from "./pages/Coin";

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/coin/:coinId' element={<Coin/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
