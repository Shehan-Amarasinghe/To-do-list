import Form from "./Components/Form";
import { useEffect, useState } from "react";
import Todo from "./Components/Todo";
import { QuerySnapshot, collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { db } from "./Components/Firebase";

const App = () => {
  
  const [todo, setTodo] = useState([""]);

  // Create Todo
  
  // Read Todo
  useEffect(()=>{
    const q = query(collection(db, "todos"))
    const unsub = onSnapshot(q,
      (QuerySnapshot)=>{
        const todosArr = []
        QuerySnapshot.forEach((doc) =>{
          todosArr.push({...doc.data(), id: doc.
          id});
        });
        setTodo(todosArr);
      });
      return ()=> unsub;
  }, []);
  
  // Update Todo

  // Delete Todo
  const deleteTodo= async (id:string) => {
    await deleteDoc(doc(db, "todos", id));
  };
  
  return (
  <div className="w-screen h-screen p-4 bg-teal-300">
    <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
        <h1 className="p-2 text-3xl font-bold text-center text-gray-800">TO-DO LIST</h1>
       <Form/>
       <ul>
        {todo.map((todos, index) => (
          <Todo key={index} todos={todos} deleteTodo={deleteTodo}/>
        ))}
       </ul>
        <p className="text-center">You have 2 things to complete</p>
    </div>
  </div>
  );
};

export default App;