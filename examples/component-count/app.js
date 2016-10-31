var App = React.createClass({
	getInitialState: function() {
  	return {
    	count : 55,
      input : ''
    }
  },
  handleIncrement : function() {
  	this.setState({
    	count : this.state.count + 1
    });
  },
  handleInput : function(e) {
  	this.setState({
    	count : parseInt(e.target.value)
    });
  },
  render: function() { 
  	return (
    	<div>
    		<Counter value={this.state.count} minLength={4}/>
        <button onClick={this.handleIncrement}>+1</button>
        <input onChange={this.handleInput} defaultValue={this.state.input} />
    	</div>)
    }
});


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
