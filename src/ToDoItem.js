import './App.css';

function ToDoItem(props){
    return(
        <>
        <div className ={`ToDoItems ${props.task.completed ? 'completed' : 'incomplete'}`}>
            <h2>{props.task.title}</h2>
            <p className='text'>completed :- {props.task.completed ? 'Yes' : 'No'}</p>
            <button className={`delete`} onClick={props.onDelete}>Delete</button>
            <button className={`delete`} onClick={props.onCompleted}>Mark As {`${props.task.completed ? 'incompleted' : 'complete'}`}</button>
        </div>
        <br/>
        </>
    )
}
export default ToDoItem;