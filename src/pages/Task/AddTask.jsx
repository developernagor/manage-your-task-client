import React, { useState } from 'react';
import './AddTask.css';

function AddTask({onSubmit}) {
    const [input, setInput] = useState("")

    const handleSubmit = () => {
        if(!input) return;

        onSubmit(input);
        setInput("");
    }
    return (
        <div className='container'>
            <input type='text' className='input' value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={handleSubmit} className='button'>Add Task</button>
        </div>
    );
}

export default AddTask;