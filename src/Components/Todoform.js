import React, {useState, useEffect, useRef} from 'react';

function Todoform(props) {
const [input, setInputs] = useState(props.edit ? props.edit.value : '');

const inputRef = useRef(null)

useEffect(() => {
    inputRef.current.focus()
})

const handleChange = e => {
    setInputs(e.target.value);
};

const handleSubmit = e => {
    e.preventDefault();
    
    props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text: input
    });
    setInputs('');
};

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? 
            (
            <>
            <input type = "text" 
            placeholder='Update Item' 
            value={input} 
            name = "text" 
            className='todo-input edit'
            onChange={handleChange}
            ref = {inputRef} 
            />
            <button className='todo-button edit'>Update Task</button>
            </>
            ):(
            <>
            <input type = "text" 
            placeholder='Add Task' 
            value={input} 
            name = "text" 
            className='todo-input'
            onChange={handleChange}
            ref = {inputRef} 
            />
            <button className='todo-button'>Add Task</button>
            </>
            )
            }

            
        </form>
    );
};

export default Todoform;