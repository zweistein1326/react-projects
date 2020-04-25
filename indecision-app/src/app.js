const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
}
const getName = obj.getName.bind(obj);
console.log(getName());

class IndecisionApp extends React.Component {
    handleRemoveAll() {

    }
    render() {
        const title = 'Indecision'
        const subTitle = 'Put your life in the hands of a computer'
        const options = ['Item 1', 'Item 2', 'Item 3']
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>);
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );

    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}> Remove All</button>
                {this.props.options.map((option) => <Option option={option} key={option} />)}
                <Option />
            </div>
        )
    }
}

//Option -> Option Component Here

class Option extends React.Component {
    render() {
        return (
            <p>{this.props.option}</p>
        );
    }
}

class AddOption extends React.Component {
    handleFormSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type='text' name='option' />
                    <button >Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))