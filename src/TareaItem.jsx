import { TrashIcon, PencilSquareIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from "react";

export default function TareaItem({ tarea, toggleCompleted, eliminarTarea, editarTarea }) {
  const [editando, setEditando] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.text);

  const guardarEdicion = () => {
    if (nuevoTexto.trim()) {
      editarTarea(tarea.id, nuevoTexto.trim());
      setEditando(false);
    }
  };

  return (
    <div className="flex items-center gap-3 justify-between border-b border-gray-300 p-3 shadow-sm rounded">
      <div className="flex items-center gap-2 flex-1">
        <input
          className="w-4 h-4"
          type="checkbox"
          checked={tarea.completed}
          onChange={() => toggleCompleted(tarea.id)}
        />

        {editando ? (
          <input
            className="flex-1 p-1 border rounded"
            type="text"
            value={nuevoTexto}
            onChange={(e) => setNuevoTexto(e.target.value)}
            autoFocus
          />
        ) : (
          <span className={tarea.completed ? "line-through text-gray-400" : ""}>
            {tarea.text}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {editando ? (
          <>
            <button onClick={guardarEdicion}>
              <CheckIcon className="w-5 h-5 text-green-500" />
            Editarlo</button>
            <button onClick={() => setEditando(false)}>
              <XMarkIcon className="w-5 h-5 text-gray-500" />
            Cancelar</button>
          </>
        ) : (
          <button onClick={() => setEditando(true)}>
            <PencilSquareIcon className="w-5 h-5 text-blue-500" />
          Editar</button>
        )}

        <button onClick={() => eliminarTarea(tarea.id)}>
          <TrashIcon className="w-5 h-5 text-red-500" />
        Eliminar</button>
      </div>
    </div>
  );
}