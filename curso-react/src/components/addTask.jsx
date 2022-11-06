import React from 'react';

import Button from './button';

import './addTask.css';
import { useState } from 'react';

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
        if (e.key === 'Enter') {
            handleTaskAddition(inputData);
        }

    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
    }

    return (
        <div className='add-task-container'>
            <input
                onChange={handleInputChange}
                value={inputData}
                onKeyDown={handleInputChange}

                className='add-task-input'
                type="text"></input>
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>

    );
}

export default AddTask;