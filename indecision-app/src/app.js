//JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your hands in the life of a computer',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>
);
let count = 0;
const addOne = () => {
    console.log('addOne');
}
const subOne = () => {
    console.log('subOne');
}
const reset = () => {
    console.log('reset');
}
const templateTwo = (
    <div>
        <h1>Count :{count}</h1>
        <button onClick={addOne}> +1</button>
        <button onClick={subOne}> -1</button>
        <button onClick={reset}> reset</button>

    </div >

);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);