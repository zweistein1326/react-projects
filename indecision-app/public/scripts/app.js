'use strict';

//JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'Put your hands in the life of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        ),
        React.createElement(
            'li',
            null,
            'Item three'
        )
    )
);
var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};
var subOne = function subOne() {
    console.log('subOne');
};
var reset = function reset() {
    console.log('reset');
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count :',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        ' +1'
    ),
    React.createElement(
        'button',
        { onClick: subOne },
        ' -1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        ' reset'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
