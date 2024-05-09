import Form from "./Components/Form";
import { useState } from "react";
import Todo from "./Components/Todo";

const App = () => {
  
  const [todo, setTodo] = useState(["Code ", "Code more"]);
  
  return (
  <div className="w-screen h-screen p-4 bg-teal-300">
    <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
        <h1 className="p-2 text-3xl font-bold text-center text-gray-800">TO-DO LIST</h1>
       <Form/>
       <ul>
        {todo.map((todos, index) => (
          <Todo key={index} todos={todos}/>
        ))}
       </ul>
        <p className="text-center">You have 2 things to complete</p>
    </div>
  </div>
  );
};

export default App;