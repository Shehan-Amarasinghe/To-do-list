import Form from "./Components/Form";
import { FormEventHandler, useEffect, useState } from "react";
import Todo from "./Components/Todo";
import { QuerySnapshot, addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { db } from "./Components/Firebase";

interface TodoType {
  text? : string
  completed? : boolean
  id : string
}

const App = () => {
  
  const [todo, setTodo] = useState<TodoType[]>([]);
  const [input, setInput] = useState('')

  // Create Todo
  const createTodo : FormEventHandler<HTMLInputElement> = async (e) => {
    e.preventDefault()
    if (input === ''){
      alert("Please enter some task")
      return
    }
    await addDoc (collection (db, "todos"), {
      text: input, 
      completed:false
    })
    setInput('')
  }
  
  // Read Todo
  useEffect(()=>{
    const q = query(collection(db, "todos"))
    const unsub = onSnapshot(q,
      (QuerySnapshot)=>{
        const todosArr : TodoType[] = [];
        QuerySnapshot.forEach((doc) =>{
          todosArr.push({...doc.data(), id: doc.
          id});
        });
        setTodo(todosArr);
      });
      return ()=> unsub();
  }, []);
  
  // Update Todo
  const toggleComplete = async(todo: TodoType) => {
    await updateDoc(doc(db, "todos", todo.id), {
     completed: !todo.completed,
    });
  };

  // Delete Todo
  const deleteTodo= async (id:string) => {
    await deleteDoc(doc(db, "todos", id));
  };
  
  return (
  <div className="w-screen h-screen p-4 overflow-y-scroll bg-teal-300">
    <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
        <h1 className="p-2 text-3xl font-bold text-center text-gray-800">TO-DO LIST</h1>
       <Form createTodo={createTodo} input={input} setInput={setInput}/>
       <ul>
        {todo.map((todos, index) => (
          <Todo key={index} todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
        ))}
       </ul>
        {todo.length > 0 ? <p className="text-center">{`You have ${todo.length} task`}</p> : null}
    </div>
  </div>
  );
};

export default App;