//stateless functional component

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }

    }

    componentDidMount() {
        console.log('fetching Data');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('saving Data');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    handleRemoveAll() {
        if (this.state.options[0] != null) {
            this.setState(() => ({
                options: []
            }))
        }

    }

    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter((rec) => option !== rec)
        }));
    }

    handlePick() {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
    }

    handleAddOption(option) {
        if (!option) { return 'Enter valid value to add item' }
        else if (this.state.options.indexOf(option) > -1) { return 'This option already exists' }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        })
        )
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subTitle={subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    handleDeleteOption={this.handleDeleteOption}
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />

            </div>);
    }
}

IndecisionApp.defaultProps = { options: [] };

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What should I do?
                </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}> Remove All</button>
            {props.options.map((option) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />))
            }
        </div>
    );
};


//Option -> Option Component Here

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => { props.handleDeleteOption(props.optionText); }}
            >
                Remove Me
                </button>
        </div>
    );
};


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }))
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button >Add Option</button>
                </form>
            </div>
        )
    }
};

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))