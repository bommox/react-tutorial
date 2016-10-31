var FilteredList = React.createClass({

    getInitialState : function() {
        return {
            filter : ""
        }
    },

    getDefaultProps : function() {
        return {
            items : [],
            onItemClick : function() {},
        }
    },

    handleInput : function(e) {
        this.setState({
            filter : e.target.value 
        });
    },

    handleItemClick : function(itemValue) {
        this.props.onItemClick(itemValue);
    },

    render : function() {
        var filteredItems = this.props.items.filter(function(itemValue) {
            var filter = this.state.filter;
            return (filter == '') 
                ? true
                : itemValue.toUpperCase().substr(0, filter.length) == filter.toUpperCase();
        }.bind(this));
        return (
            <div>
                <input className="form-control" onChange={this.handleInput}/>
                <List items={filteredItems} onItemClick={this.handleItemClick} />
                { filteredItems.length == 0
                    ? <div className="alert alert-warning">No items for filter '{this.state.filter}'</div>
                    : ''
                }
            </div>
        );
    }
});