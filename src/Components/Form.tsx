import AddCircleIcon from '@mui/icons-material/AddCircle';

const Form = () => {
    return (
        <form className='flex items-center justify-between p-4 bg-teal-300 rounded-lg'>
            <input type="text" className='w-full text-xl rounded-lg p-[3px]'/>
            <button className='ml-2 text-gray-800 rounded-lg'>
                <AddCircleIcon/>
            </button>
        </form>
    );
};

export default Form;