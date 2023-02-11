import {TaskContext} from "./task-context";
import {useEffect, useState} from "react";



export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([]);
    const [states] = useState([
        {id: 1, name: 'backlog', state: 'backlog'},
        {id: 2, name: 'ready', state: 'ready'},
        {id: 3, name: 'in progress', state: 'inProgress'},
        {id: 4, name: 'finished', state: 'finished'}
    ]);

    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    }, [tasks])

    useEffect(() => {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            setTasks(JSON.parse(tasks))
        }
    }, [])

    const context = {
        states,
        addTask: (name, state) => {
            const task = {
                id: tasks.length + 1,
                name,
                state
            }

            setTasks([...tasks, task])
        },
        getTasksByState: (state) => {
            return tasks.filter(task => task.state === state);
        },
        getTasksByExcludedState: (state) => {
            return tasks.filter(task => task.state !== state);
        },
        moveTask: (id, state) => {
            const task = tasks.find((task) => task.id === parseInt(id));
            if (task) {
                task.state = state;
            }
            setTasks([...tasks]);
        },
        getActiveTaskCount: () =>
            tasks.filter(task => task.state === 'ready' || task.state === 'inProgress').length,
        getFinishedTaskCount: () =>
            tasks.filter(task => task.state === 'finished').length,
    }

    return <TaskContext.Provider value={context}>{props.children}</TaskContext.Provider>
}
