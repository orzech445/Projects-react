import React from "react"

const TodoItem = props => {
    const completeHandler = () => props.markCompleted(props.element.id)
    const removeHandler = () => props.removeCard(props.element.id)

    return (
        <div className={`card ${props.element.isCompleted ? "completed": ""}`} key={props.element.id}>
            <h2>{props.element.title}</h2>
            <button className="completedBtn" onClick={completeHandler}>Completed</button>
            <button className="removeBtn" onClick={removeHandler}>x</button>
        </div>
    )
}

export default TodoItem