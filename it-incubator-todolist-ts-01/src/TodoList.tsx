import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import {FilterValuesType, TaskType} from "./App";
import Task from "./Task";
import AddItemForm from "./AddItemForm";
import ButtonsBlock from "./ButtonsBlock";

type TodoListPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (filter: FilterValuesType, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todoListID: string) => void
    changeTaskTitle: (taskID: string, title: string, todoListID: string) => void
    changeTodoListTitle: (title: string, todoListID: string) => void
}

const TodoList = (props: TodoListPropsType) => {
    const tasksComponents = props.tasks.map(t => {
        // как вариант в отличие от "removeTask"
        // const changeTaskStatus = () => props.changeTaskStatus(t.id)
        const removeTask = (taskID: string) => props.removeTask(taskID, props.id)
        const changeTaskStatus = (taskID: string, isDone: boolean) =>
            props.changeTaskStatus(taskID, isDone, props.id)
        const changeTaskTitle = (taskID: string, title: string) =>
            props.changeTaskTitle(taskID, title, props.id)
        return (
            <Task
                key={t.id}
                //{...t}
                id={t.id}
                title={t.title}
                isDone={t.isDone}
                removeTask={removeTask}
                changeTaskStatus={changeTaskStatus}
                changeTaskTitle={changeTaskTitle}
            />
        )
    })

    const setFilterValue = (filter: FilterValuesType) =>
        () => props.changeFilter(filter, props.id)
    const removeTodoList = () => props.removeTodoList(props.id)
    const addTask = (title: string) => props.addTask(title, props.id)
    const changeTodoListTitle = (title: string) => props.changeTodoListTitle(title, props.id)
    return (
        <div className={"todolist"}>
            <TodoListHeader
                title={props.title}
                removeTodoList={removeTodoList}
                changeTodoListTitle={changeTodoListTitle}
            />
            <AddItemForm addItem={addTask} />
            <ul>
                {tasksComponents}
            </ul>
            <ButtonsBlock filter={props.filter} setFilterValue={setFilterValue}/>
        </div>
    );
};

export default TodoList;