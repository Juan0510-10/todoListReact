import { TrashIcon } from '@heroicons/react/24/solid';

export default function TareaItem({tarea, toggleComplited, toggleEliminated}){

    return (
        <div className="flex items-center gap-3 justify-between border-b border-gray-300 p-3 shadow-sm rounded">
            <span className={tarea.complited ? 'line-through' : 'text-gray-400'}>{tarea.texto}</span>
            <input type="checkbox" className="w-4 h-4" checked={""} onChange={()=> toggleComplited(tarea.id)} />
            <button>
                <TrashIcon className="w-5 h-5 text-white-500" onChange={() => toggleEliminated(tarea.id)} />
            </button>
        </div> 
    );
}

