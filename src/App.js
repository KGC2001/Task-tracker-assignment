import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    // Load tasks from local storage when the app starts
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    // Save tasks to local storage whenever tasks change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Function to add a new task
    const addTask = (newTask) => {
        const updatedTasks = [...tasks, { ...newTask, id: Date.now() }]; // Add unique ID
        setTasks(updatedTasks);
    };

    // Function to edit an existing task
    const editTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
    };

    // Function to delete a task
    const deleteTask = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this task?');
        if (confirmDelete) {
            const updatedTasks = tasks.filter((task) => task.id !== id);
            setTasks(updatedTasks);
        }
    };

    return (
        <div className="app">
            <h1>Task Tracker</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
        </div>
    );
};

export default App;
