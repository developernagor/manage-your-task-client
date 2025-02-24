import React from 'react';
import './column.css'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Task from '../../pages/Task/Task';

function Column({tasks}) {
    return (
        <div className='column'>
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {
                tasks.map(task => (
                    <Task id={task.id} title={task.title} key={task.id}></Task>
                ))
            }
            </SortableContext>
        </div>
    );
}

export default Column;