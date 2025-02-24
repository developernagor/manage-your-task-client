import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import React, { useState } from 'react';
import Column from '../../components/Column/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import AddTask from '../Task/AddTask';

function Home(props) {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Add Task 1" },
        { id: 2, title: "Add Task 2" },
        { id: 3, title: "Add Task 3" },
    ]);

    const addTask = (title) => {
        setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
    };

    const getTaskPos = (id) => tasks.findIndex(task => task.id === id);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        setTasks(tasks => {
            const originalPos = getTaskPos(active.id);
            const newPos = getTaskPos(over.id);
            return arrayMove(tasks, originalPos, newPos);
        });
    };

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    return (
        <div>
            <h1>My Task</h1>
            <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                <AddTask onSubmit={addTask} />
                <Column tasks={tasks} />
            </DndContext>
        </div>
    );
}

export default Home;
