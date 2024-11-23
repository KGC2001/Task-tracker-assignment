import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask }) => {
    return (
        <div className="task-list">
            {tasks.length === 0 ? (
                <p>No tasks available. Add some tasks!</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        editTask={editTask}
                        deleteTask={deleteTask}
                    />
                ))
            )}
        </div>
    );
};

export default TaskList;
