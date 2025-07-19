import {useState} from 'react'
import ToDoItem from './ToDoItem'; 
function ToDoList(){
    const task = [
        {id:1, title:"Learn React", completed:false},
        {id:2, title:"Basic of C programming", completed:true},
        {id:3, title:"Object oriented Concepts", completed:true},
        {id:4, title:"Master in web Devlopment", completed:false},
    ]
    const [todo, setTodo] = useState(task);
    const [inputValue, setInputValue] = useState('');
    const deleteTodo = (keyId) =>{
        const updateTodo = todo.filter(answer=>answer.id !== keyId);
        setTodo(updateTodo);
    }
    const markAsCompleted= (keyId)=>{
        const newToDo = todo.map( val=>{
            if(val.id === keyId){
                return {...val, completed : !val.completed}
            }
            return val
        });
        setTodo(newToDo);
    }

    const addTodo =()=>{
        const Obj = { id : Date.now(), title : inputValue, completed:false }
        setTodo([...todo, Obj]);
        setInputValue('');
    }
    return (
        <div>
        <div>
            <input type='text' className='textBox' value={inputValue} placeholder='Add value' onChange ={(e) => setInputValue(e.target.value)}></input>
            <button onClick={addTodo} className='addButton'>Add Todo</button>
        </div>
            {todo.map((row) => (
        <ToDoItem key={row.id} task={row} onDelete={() => deleteTodo(row.id)} onCompleted = {()=>markAsCompleted(row.id)} />
      ))}
        </div>
    );
}
export default ToDoList;