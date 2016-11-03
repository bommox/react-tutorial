/**
 * React <AppRoot2 />
 * ======================
 * - Properties
 * - Events
 * - State: [count, input, timerId]
 */
var AppRoot2 = React.createClass({

  /**
   * Initial values for state
   */
  getInitialState: function () {
    return {
      count: 55,
      input: '',
      timerId: undefined
    }
  },

  /**
   * Increments the state.count
   */
  increment: function () {
    this.setState({
      count: this.state.count + 1
    });
  },

  /**
   * Handles the onClick event on button
   */
  handleTimerBtn: function () {
    if (this.state.timerId) {
      clearInterval(this.state.timerId);
      this.setState({ timerId: undefined });
    } else {
      var id = setInterval(this.increment, 300);
      this.setState({ timerId: id });
    }
  },

  /**
   * Component render
   */
  render: function () {
    var timerRunning = this.state.timerId != undefined;
    return (
      <div className="row">
        <div className="col-xs-5">
          <button className={timerRunning ? 'btn btn-block btn-danger' : 'btn btn-block btn-success'} onClick={this.handleTimerBtn}>{timerRunning ? 'Stop' : 'Start'}</button>
        </div>
        <div className="col-xs-7">
          <Counter value={this.state.count} minLength={4}/>
        </div>
      </div>)
  }
});
