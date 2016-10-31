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
          this.props.items.map(function(itemValue,idx) {
            return (
              <li 
                key={idx} 
                className={this.state.selectedItem == itemValue ? "list-group-item active" : "list-group-item"} 
                onClick={this.handleItemClick.bind(this,idx)}>{itemValue}</li>
            )
          }.bind(this))
        }
      </ul>
    );
  }
});
