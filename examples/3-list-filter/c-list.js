/**
 * React <List />
 * ======================
 * - Properties
 *    - items
 * - Events:
 *    - onItemClick
 * - State: [selectedItem]
 */
var List = React.createClass({

  /**
   * Initial values for state
   */
  getInitialState : function() {
    return {
      selectedItem : ''
    }
  },

  /**
   * Default values for properties
   */
  getDefaultProps : function() {
    return {
      onItemClick : function() {}
    }
  },

  /**
   * Handles item click
   */
  handleItemClick : function(itemValue) {
    this.setState({
      selectedItem : itemValue
    });
    this.props.onItemClick(itemValue);
  },

  /**
   * Component render
   */
  render : function() {
  	return (
      <ul className="list-group">
    	  {
          this.props.items.map(function(itemValue,idx) {
            return (
              <li key={idx} 
                  className={this.state.selectedItem === idx 
                      ? "list-group-item active" 
                      : "list-group-item"} 
                  onClick={this.handleItemClick.bind(this,idx)}>
                {itemValue}
              </li>
            )
          }.bind(this))
        }
      </ul>
    );
  }
});