var AppRoot3 = React.createClass({
	getInitialState: function() {
  	return {
    	count : 55
    }
  },
  handleInput : function(e) {
  	this.setState({
    	count : parseInt(e.target.value)
    });
  },
  render: function() { 
  	return (
    	<div className="row">
        <div className="col-sm-5">
            <input className="form-control" onChange={this.handleInput} />
        </div>
        <div className="col-sm-7">
    		  <Counter value={this.state.count} minLength={4}/>
        </div>
    	</div>)
    }
});
