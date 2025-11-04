import UserProfile from "./components/UserProfile";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import EditUser from "./components/EditUser";
import Tareas from "./components/Tareas";


function App() {
return(
  <>
    <Routes>
        <Route path="/" element={<UserProfile/>} />
        <Route path="/edit" element={<EditUser/>} />
        <Route path='/tareas' element={<Tareas/>} />
    </Routes>
  </>
)
}

export default App;
