import React, { useState } from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {

    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPerssHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(title)
            setTitle('')
        }
    }

    return (
        <div className="input-field mt2">
            <input
                onChange={changeHandler}
                value={title}
                id="title"
                type="text"
                placeholder="add todo"
                onKeyPress={keyPerssHandler}
            />
            <label htmlFor="title" className="active">add todo</label>
        </div>
    )
}