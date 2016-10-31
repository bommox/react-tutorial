var List = React.createClass({

  getInitialState : function() {
    return {
      selectedItem : ''
    }
  },

  getDefaultProps : function() {
    return {
      onItemClick : function() { }
    }
  },

  handleItemClick : function(itemValue) {
    this.setState({
      selectedItem : itemValue
    });
    this.props.onItemClick(itemValue);
  },

  render : function() {
  	return (
      <ul className="list-group">
    	  {
          this.props.items.map(function(itemValue) {
            return (
              <li 
                key={itemValue} 
                className={this.state.selectedItem == itemValue ? "list-group-item active" : "list-group-item"} 
                onClick={this.handleItemClick.bind(this,itemValue)}>{itemValue}</li>
            )
          }.bind(this))
        }
      </ul>
    );
  }
});
