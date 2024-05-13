import AddCircleIcon from '@mui/icons-material/AddCircle';

interface FormPropTypes{
    input: string
    setInput: (input:string)=>void
}

const Form = ({createTodo, input, setInput}:FormPropTypes) => {
    return (
        <form onSubmit={createTodo} className='flex items-center justify-between p-4 bg-teal-300 rounded-lg'>
            <input 
            onChange={(e)=> setInput(e.target.value)} value={input}
            type="text" className='w-full text-xl rounded-lg p-[3px]'/>
            <button className='ml-2 text-gray-800 rounded-lg'>
                <AddCircleIcon/>
            </button>
        </form>
    );
};

export default Form;