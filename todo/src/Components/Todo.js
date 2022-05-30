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

    removeCard(itemToBeDeleted) {
        const newElements = this.state.elements.filter(item => item.id !== itemToBeDeleted)

        this.setState({elements: newElements})
    }

    addItem() {
        const item = {
            id: Math.random(),
            title: this.state.inputValue
        }

        const newElements = [item, ...this.state.elements]
        this.setState({elements: newElements})
    }

    inputHandler(event) {
        const newValue = event.target.value
        this.setState({inputValue: newValue})
    }

    render() {
        const tab = this.state.elements.map(e => {
            return (
                <TodoItem element={e}
                markClicked={this.markCompleted.bind(this)}
                removeClicked={this.removeCard.bind(this)}/>
            )
        })
        return (
            <div>
                Todo App
                <input type="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)} />
                <button onClick={this.addItem.bind(this)}>Add Event</button>
                {tab}
            </div>
        )
    }
}

export default Todo