import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import EditUser from "./EditUser";
import useTareasStore from "../store/tareas-store";
// import { useHistory } from "react-router-dom";


const UserProfile = () => {
  // const history = useHistory();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  
  const tareas = useTareasStore((state) => state.tareas);

  const cargarDatosUsuario = async () => {
    setLoading(true);
    /*
        axios
          .get("https://jsonplaceholder.typicode.com/users/1")
          .then((response) => {
            setUser(response.data);
          })
          .catch(() => {
            history.push("/error");
          })
          .finally(() => {
            setLoading(false);
          });
        */
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(response.data);
    } catch (error) {
      // history.push("/error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarDatosUsuario();
  }, []);

  return (
    <>
      <div>
        {loading && <h1>LOADING....</h1>}
        {user && <h1>{user.name}</h1>}
        
          {
                tareas && tareas.map((tarea) => {
                    return <h1>{tarea.title}</h1>
                })
            }
        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* {
        user && <EditUser/>
      } */}
    </>
  );
};

export default UserProfile;
