/**
 * React <FilteredList />
 * ======================
 * - Properties:
 *      - items : Array of items to show
 * - Events;
 *      - onItemClick
 * - State: [filter]
 */
var FilteredList = React.createClass({

    /**
     * Initial values for state
     */
    getInitialState : function() {
        return {
            filter : ""
        }
    },

    /**
     * Default values for props
     */
    getDefaultProps : function() {
        return {
            items : [],
            onItemClick : function() {},
        }
    },

    /**
     * Handls the onChange event on input field
     */
    handleInput : function(e) {
        this.setState({
            filter : e.target.value 
        });
    },

    /**
     * Handles onClick on a list item
     */
    handleItemClick : function(itemValue) {
        this.props.onItemClick(itemValue);
    },

    /**
     * Component render
     */
    render : function() {
        // Calculates the filtered items to show
        var filteredItems = this.props.items.filter(function(itemValue) {
            var filter = this.state.filter;
            return (filter == '') 
                ? true
                : itemValue.toUpperCase().indexOf(filter.toUpperCase()) > -1;
        }.bind(this));

        // If no items in list or after filtering, creates a message
        var message = '';
        if (this.props.items.length == 0 ) {
            message = (
                <div className="alert alert-info">
                    No data
                </div>
            );
        } else if (filteredItems.length == 0) {
            message = (
                <div className="alert alert-warning">
                    No items for filter '{this.state.filter}'
                </div>
            );
        }

        return (
            <div>
                <input className="form-control" onChange={this.handleInput} placeholder="List filter..." />
                <br/>
                <List items={filteredItems} onItemClick={this.handleItemClick} />
                {message}
            </div>
        );
    }
});