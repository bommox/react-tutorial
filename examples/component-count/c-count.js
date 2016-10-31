var Counter = React.createClass({

  render : function() {
  	var value = parseInt(this.props.value) + "";
    var charsToShow = (this.props.minLength && this.props.minLength > value.length) ? this.props.minLength : value.length;
  	var count = ("00000000" + value).substr(-charsToShow);
  	return (
    	<div>
    	{count.split("").map((v,i) => <CounterDigit key={i} num={v}/>)}  
      </div>
    );
  }
});

var CounterDigit = React.createClass({
  render: function() { 
  	var nums = "0123456789".split("");
  	return (
      <div className="numcount">
				{nums.map(n=><span key={n} className={this.props.num == parseInt(n) ? 'active' : ''}>{n}</span>)}
      </div> 
    )
   }
});