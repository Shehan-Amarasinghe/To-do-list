import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
<<<<<<< HEAD
import { TodoType } from '../types';

interface TodoProps{
    todos: TodoType;
    deleteTodo: (id:string)=> void
}

const Todo = ({todos, deleteTodo}:TodoProps) => {
    return (
        <li className="p-2 my-2 uppercase bg-teal-300 rounded-md shadow-sm">
            <div className='flex items-center justify-between'>
                <p>{todos.text} </p>
=======

interface TodoProps{
    todos: string;
}

const Todo = ({todos}: TodoProps) => {
    return (
        <li className="p-2 my-2 uppercase bg-teal-300 rounded-md shadow-sm">
            <div className='flex items-center justify-between'>
                <p>{todos} </p>
>>>>>>> e696781 (Using props and useState for both App.tsx and Todo.tsx files.)
                    <div className='flex gap-3'>
                        <button>
                            <CheckIcon/>
                        </button>
<<<<<<< HEAD
                        <button onClick={()=> deleteTodo(todos.id)}>
=======
                        <button>
>>>>>>> e696781 (Using props and useState for both App.tsx and Todo.tsx files.)
                            <DeleteIcon/>
                        </button>
                    </div>  
              </div>
        </li>
    );
};

export default Todo;