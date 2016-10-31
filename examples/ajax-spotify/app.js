var App = React.createClass({

    getInitialState : function() {
        return {
            data : []
        }
    },

    doSearch : function(searchText) {
        $.ajax({
            url: 'https://api.spotify.com/v1/search',
            data: {  q: searchText,  type: 'artist'  },
            success: function (response) {
                this.setState({
                    data : response.artists.items
                });
            }.bind(this)
        });
    },

    handleSearchChange : function(e) {
        if (e.keyCode == 13) {
            this.doSearch(e.target.value);
        }
    },

    render: function () {
        var results = this.state.data;
        return (
            <div>

                <div className="row">
                    <div className="col-xs-8">
                        <input className="form-control" placeholder="Search for..." onKeyDown={this.handleSearchChange}/>
                    </div>
                    <div className="col-xs-2 text-right">N.Results: </div>
                    <div className="col-xs-2">
                        <Counter value={results.length} minLength={2}/>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <FilteredList items={results.map(item => item.name)} />
                </div>
            </div>

        );
    }
});