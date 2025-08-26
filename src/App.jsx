import TareaItem from "./TareaItem";
import { useState } from "react";

export default function App() {

  const [tareas, setTareas] = useState([]);

  const [input, setInput] = useState("");

  const agregarTarea = () => {
    if(input.trim() ){
      setTareas([...tareas, {id: Date.now(), texto: input.trim(), completed: false}]);
      setInput("");
    };
  }

  const toggleComplited = (id) => {
    setTareas(
      tareas.map(tarea => 
        tarea.id === id ? {...tarea, completed: !tarea.completed} : tarea
      )
    );
  }

  const toggleEliminated = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };
  
  return (
    <div className="max-w-md mx-auto mt-10 p-2 rounded shadow">
      <h1 className="text-3xl font-bold mb-5 text-center">LISTA DE TAREAS</h1>
      <div className="flex gab-3 mb-5">
        <input type="text" className="flex-1 p-2 border-rounded" value={input} onChange={(e) => setInput(e.target.value)} placeholder=""/>
        <button className="bg-blue-500 text-white px-4 p-y-2 rounded" onClick={agregarTarea}>Añadir tareas</button>
      </div>

      <div className="space-y-2">
        {tareas.map((tarea) => (<TareaItem key={tarea.id} tarea={tarea} toggleComplited={toggleComplited} toggleEliminated={toggleEliminated}/>))}
      </div>
    </div>
  );

}