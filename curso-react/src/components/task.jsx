import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';

import './task.css'

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const history = useNavigate();

    const handleTaskDetailsClick = () => {
        history(`/${task.title}`)
    }

    return (
        <div className='task-container' style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
            <div onClick={() => handleTaskClick(task.id)} className='task-title'>
                {task.title}
            </div>

            <div className='buttons-container'>
                <button
                    className='see-task-details-button'
                    onClick={handleTaskDetailsClick}
                >
                    <CgInfo />
                </button>
                <button
                    className='remove-task-button'
                    onClick={() => handleTaskDeletion(task.id)}
                >
                    <CgClose />
                </button>
            </div>
        </div>
    );
}

export default Task;