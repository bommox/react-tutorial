var App = React.createClass({

    getInitialState : function() {
        return {
            artists : [],
            selectedArtist : undefined
        }
    },

    doSearch : function(searchText) {
        $.ajax({
            url: 'https://api.spotify.com/v1/search',
            data: {  q: searchText,  type: 'artist'  },
            success: function (response) {
                this.setState({
                    artists : response.artists.items
                });
            }.bind(this)
        });
    },

    handleSearchChange : function(e) {
        if (e.keyCode == 13) {
            this.doSearch(e.target.value);
        }
    },

    handleArtistClick : function(idx) {
        this.setState({
            selectedArtist : this.state.artists[idx]
        });
    },

    render: function () {
        var results = this.state.artists;
        var artistInfo = (this.state.selectedArtist)
            ? (
                <div className="media">
                    <div className="media-left">
                        <a href="#">
                            <img className="media-object img-circle" src={this.state.selectedArtist.images[0].url} width="64" height="64"/>
                        </a>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{this.state.selectedArtist.name}</h4>
                        <p>Genres: {this.state.selectedArtist.genres.join(", ")}</p>
                    </div>
                </div>
            )
            : '';
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
                    <h2>Artist information:</h2>
                    {artistInfo}
                </div>
                <hr/>
                <div className="row">
                    <h2>Results:</h2>
                    <FilteredList items={results.map(item => item.name)} onItemClick={this.handleArtistClick}/>
                </div>
            </div>

        );
    }
});