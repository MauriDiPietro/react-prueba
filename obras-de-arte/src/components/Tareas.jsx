import { use, useEffect } from "react";
import useTareasStore from "../store/tareas-store";

const Tareas = () => {

    const getTareas = useTareasStore((state) => state.getTareas);
    const tareas = useTareasStore((state) => state.tareas);
    const usuarios = useUsuariosStore((state) => state.usuarios);

    useEffect(()=>{
        getTareas();
    }, [])

    return(

        <p>
            {
                tareas && tareas.map((tarea) => {
                    return <h1>{tarea.title}</h1>
                })
            }
        </p>
    )
}

export default Tareas;