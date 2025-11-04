import { create } from 'zustand';

const useUsuariosStore = create((set, get)=>({
    usuarios: [
        {id: 1, title: "Tarea 1"},
    ],
    setTareas: (tarea) => set(state => ({
        tareas: [...state.tareas, tarea]
    })),
    getTareas: () => get().tareas
}))

export default useUsuariosStore;