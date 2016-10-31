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
                : itemValue.toUpperCase().indexOf(filter.toUpperCase()) > -1;
        }.bind(this));
        var message = '';
        if (this.props.items.length == 0 ) {
            message = <div className="alert alert-info">No data</div>;
        } else if (filteredItems.length == 0) {
            message = <div className="alert alert-warning">No items for filter '{this.state.filter}'</div>;
        }
        return (
            <div>
                <input className="form-control" onChange={this.handleInput} placeholder="List filter..." />
                <List items={filteredItems} onItemClick={this.handleItemClick} />
                {message}
            </div>
        );
    }
});