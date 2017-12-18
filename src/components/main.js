import React from 'react';
import TodosList from './todos';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    title: "Learn React"
                },
                {
                    title: "Climb Mt. Everest"
                },
                {
                    title: "Run a marathon"
                },
                {
                    title: "Feed the dogs"
                },
            ],
        };
    }

    render() {
        return (
            <div>
                <h1>Hello Dojo!</h1>
                <TodosList 
                    todos={this.state.todos}
                />
            </div>
        );
    }
}
export default Main;