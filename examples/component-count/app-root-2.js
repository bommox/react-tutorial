var AppRoot2 = React.createClass({
	getInitialState: function() {
  	return {
    	count : 55,
      input : '',
      timerId : undefined
    }
  },
  increment : function() {
    this.setState({
    	count : this.state.count + 1
    });
  },
  handleTimerBtn : function() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId);
      this.setState({timerId : undefined});
    } else {
      var id = setInterval(this.increment, 300);
      this.setState({timerId : id});
    }
  },
  
  render: function() { 
    var timerRunning = this.state.timerId != undefined;
  	return (
    	<div className="row">
        <div className="col-xs-5">
            <button className={timerRunning? 'btn btn-block btn-danger' : 'btn btn-block btn-success'} onClick={this.handleTimerBtn}>{timerRunning? 'Stop' : 'Start'}</button>
        </div>
        <div className="col-xs-7">
            <Counter value={this.state.count} minLength={4}/>
        </div>
    	</div>)
    }
});
