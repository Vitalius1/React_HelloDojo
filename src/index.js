console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        React.createElement(Main),
        document.getElementById('mount')
    );
});