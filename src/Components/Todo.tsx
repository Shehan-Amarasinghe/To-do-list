import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoProps{
    todos: string;
}

const Todo = ({todos}: TodoProps) => {
    return (
        <li className="p-2 my-2 uppercase bg-teal-300 rounded-md shadow-sm">
            <div className='flex items-center justify-between'>
                <p>{todos} </p>
                    <div className='flex gap-3'>
                        <button>
                            <CheckIcon/>
                        </button>
                        <button>
                            <DeleteIcon/>
                        </button>
                    </div>  
              </div>
        </li>
    );
};

export default Todo;