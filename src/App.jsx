import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Confirm from "./pages/Confirm";
import Navbar from "./components/Navbar";

function App() {
return(
  <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/art/:id" element={<Detail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path="/confirm" element={<Confirm/>} />
    </Routes>
  </>
)
}

export default App;
