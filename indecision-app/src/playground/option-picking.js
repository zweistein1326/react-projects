//JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your hands in the life of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.option.value;
    if (option) {
        app.options.push(option);
        e.target.option.value = '';
    }
    renderCounterApp();
}

const onRemoveAll = () => {
    app.options = [];
    renderCounterApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const selectedOption = app.options[randomNum];
    if (app.options.length) { alert(selectedOption); }

    console.log(randomNum);
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
        </div >
    );
    ReactDOM.render(template, appRoot);
}

renderCounterApp();