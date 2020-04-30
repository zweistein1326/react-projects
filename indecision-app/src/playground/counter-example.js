// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const subOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// var appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count :{count}</h1>
//             <button onClick={addOne}> +1</button>
//             <button onClick={subOne}> -1</button>
//             <button onClick={reset}> reset</button>

//         </div>

//     );
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });

        // this.setState({ count: 0 });
        // this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = { count: 0 }

ReactDOM.render(<Counter />, document.getElementById('app'));