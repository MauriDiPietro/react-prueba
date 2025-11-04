import { create } from 'zustand';

const useTareasStore = create((set, get)=>({
    tareas: [
        {id: 1, title: "Tarea 1"},
        {id: 2, title: "Tarea 2"},
        {id: 3, title: "Tarea 3"},
    ],
    setTareas: (tarea) => set(state => ({
        tareas: [...state.tareas, tarea]
    })),
    getTareas: () => get().tareas,
    fetchTareas: async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        set({tareas: data});
    }
}))

export default useTareasStore;