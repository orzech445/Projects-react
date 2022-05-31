import React from 'react'
import TodoItem from './TodoItem'

class Todo extends React.Component {
    state = {
        elements: [
            {id: "1", isCompleted: true, title: "Zadanie1"},
            {id: "2", isCompleted: false, title: "Zadanie2"}
        ],
        inputValue: ''
    }

    markCompleted(id) {
        const index = this.state.elements.findIndex(e => e.id === id)

        const newElements = this.state.elements
        newElements[index].isCompleted = true

        this.setState({elements: newElements})
    }

    removeCard(id) {
        const newElements = this.state.elements.filter(item => item.id !== id)

        this.setState({elements: newElements})
    }

    addItem() {
        if (this.state.inputValue) {
            const item = {
                id: this.state.elements.length + 1,
                title: this.state.inputValue
            }

            const newElements = [item, ...this.state.elements]
            this.setState({elements: newElements})
        }
    }

    inputHandler(event) {
        const newValue = event.target.value
        this.setState({inputValue: newValue})
    }

    render() {
        const tab = this.state.elements.map(e => {
            return (
                <TodoItem element={e}
                markCompleted={this.markCompleted.bind(this)}
                removeCard={this.removeCard.bind(this)}
                />
            )
        })
        return (
            <div className='todo-container'>
                <h1>Todo App</h1>
                <input type="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)} />
                <button className='addTask' onClick={this.addItem.bind(this)}>Add Task</button>
                {tab}
            </div>
        )
    }
}

export default Todo