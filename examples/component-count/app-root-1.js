var AppRoot1 = React.createClass({
	getInitialState: function() {
  	return {
    	count : 55
    }
  },
  
  increment : function(n) {
    n = n || 1;
    this.setState({
    	count : this.state.count + parseInt(n)
    });
  },

  render: function() {
    var buttons = [100, 50,  10, 5, 1];
  	return (
    	<div className="row">
        <div className="col-sm-5">
            <div className="btn-group">
                {
                  buttons.map(function(val) {
                    return (
                      <button className="btn btn-default" onClick={this.increment.bind(this, val)}>+{val}</button>
                    );
                  }.bind(this))
                }
            </div>
        </div>
        <div className="col-sm-7">
    		  <Counter value={this.state.count} minLength={1}/>
        </div>
    	</div>)
    }
});
