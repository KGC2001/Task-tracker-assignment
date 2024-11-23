import React, { useState } from 'react';

const TaskItem = ({ task, editTask, deleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ ...task });

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedTask({ ...editedTask, [name]: value });
    };

    const saveEdit = () => {
        editTask(editedTask);
        setIsEditing(false);
    };

    return (
        <div className="task-item">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        name="title"
                        value={editedTask.title}
                        onChange={handleEditChange}
                    />
                    <textarea
                        name="description"
                        value={editedTask.description}
                        onChange={handleEditChange}
                    ></textarea>
                    <input
                        type="date"
                        name="dueDate"
                        value={editedTask.dueDate}
                        onChange={handleEditChange}
                    />
                    <select
                        name="status"
                        value={editedTask.status}
                        onChange={handleEditChange}
                    >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <button onClick={saveEdit}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Due: {task.dueDate}</p>
                    <p>Status: {task.status}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default TaskItem;
