import React from "react"

const TodoItem = props => {
    const completeHandler = () => props.markClicked(props.element.id)
    const removeHandler = () => props.removeClicked(props.element.id)

    return (
        <div className={`card ${props.element.isCompleted ? "completed": ""}`} key={props.element.id}>
            <h2>{props.element.title}</h2>
            <button className="completedBtn" onClick={completeHandler}>Completed</button>
            <button className="removeBtn" onClick={removeHandler}>x</button>
            <button className="editBtn"><i class='far fa-edit'></i></button>
        </div>
    )
}

export default TodoItem