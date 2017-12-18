import React from 'react';

function ListItem(props) {
    return <li>{props.value}</li>;
}

function TodosList(props) {
    const todos = props.todos;
    const listItems = todos.map((todo) =>
        <ListItem key={todo.title}
            value={todo.title} />
    );
    return (
        <div>
            <h2>Things I need to do:</h2>
            <ul>{listItems}</ul>
        </div>
    );

}

export default TodosList;