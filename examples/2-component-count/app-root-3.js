/**
 * React <AppRoot3 />
 * ======================
 * - Properties
 * - Events
 * - State: [count]
 */
var AppRoot3 = React.createClass({

    /**
     * Initial values for state
     */
    getInitialState: function () {
        return {
            count: 55
        }
    },

    /**
     * Handles user input and modifies state.count
     */
    handleInput: function (e) {
        this.setState({
            count: parseInt(e.target.value)
        });
    },

    /**
     * Component render
     */
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-5">
                    <input className="form-control" onChange={this.handleInput} />
                </div>
                <div className="col-sm-7">
                    <Counter value={this.state.count} minLength={4}/>
                </div>
            </div>
        );
    }
});
