/**
 * React <App />
 * ======================
 * - Properties
 * - Events
 * - State: [name]
 */
var App = React.createClass({

    WORLD: "World",

    /**
     * Initial values for state
     */
    getInitialState: function () {
        return {
            name: this.WORLD
        }
    },

    /**
     * Input onChange handler
     */
    handleInput: function (e) {
        this.setState({
            name: e.target.value
        });
    },

    /**
     * Component render
     */
    render: function () {
        return (
            <div>
                <input onChange={this.handleInput}/>
                <h1>Hello, {this.state.name || this.WORLD}!</h1>
            </div>
        );
    }

});