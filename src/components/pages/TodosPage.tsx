import React, { useState, useEffect } from 'react'
import { TodoForm } from '../TodoForm'
import { TodoList } from '../TodoList'
import { ITodo } from '../../interface'


declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            complited: false
        }
        // setTodos([newTodo, ...todos])
        setTodos(prev => [newTodo, ...prev])
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    complited: !todo.complited
                }
            }
            return todo
        })
        )
    }

    const removeHandler = (id: number) => {
        const shoutRemove = confirm('Are you sure you want to delete the item?')
        if (shoutRemove) {
            setTodos(prev =>
                prev.filter(todo => todo.id !== id)
            )
        }
    }

    return (
        <>
            <h1>Todo list</h1>
            <TodoForm onAdd={addHandler} />
            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
        </>
    )
}