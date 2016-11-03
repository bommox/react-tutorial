var App = React.createClass({

    /**
     * Initial state of App
     */
    getInitialState : function() {
        return {
            artists : [],
            selectedArtist : undefined,
            errorMessage : undefined
        }
    },

    /**
     * @private
     * Fetch artist query to spotify API
     */
    doSearch : function(searchText) {
        $.ajax({
            url: 'https://api.spotify.com/v1/search',
            data: {  q: searchText,  type: 'artist'  },
            success: function (response) {
                this.setState({
                    artists : response.artists.items
                });
            }.bind(this),
            error : function(e) {
                console.error(e);
                this.setState({
                    errorMessage : 'No se ha podido realizar la petición.'
                });
            }.bind(this)
        });

        // Reset the errorMessage
        this.setState({
            errorMessage : undefined
        });
    },

    /**
     * Handles onChange event on search field
     */
    handleSearchChange : function(e) {
        if (e.keyCode == 13) {
            this.doSearch(e.target.value);
        }
    },

    /**
     * Handles artist click on list
     */
    handleArtistClick : function(idx) {
        this.setState({
            selectedArtist : this.state.artists[idx]
        });
    },

    /**
     * Component render
     */
    render: function () {
        // List of artist (empty at beginning)
        var results = this.state.artists;

        // Artis information. Empty if no artist selected
        var artistInfo = '';
        if (this.state.selectedArtist) {
            var imgs = this.state.selectedArtist.images;
            var imgUrl = (imgs.length) 
                ? imgs[imgs.length - 1].url
                : 'no-image.png';
            artistInfo = (
                <div className="media">
                    <div className="media-left">
                        <a href="#">
                            <img className="media-object img-circle" src={imgUrl} width="64" height="64"/>
                        </a>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{this.state.selectedArtist.name}</h4>
                        <p>Genres: {this.state.selectedArtist.genres.join(", ")}</p>
                    </div>
                </div>
            )
        }

        // Error message
        var errorMessage = '';
        if (this.state.errorMessage) {
            errorMessage = (
                <div className="alert alert-danger">{this.state.errorMessage}</div>
            );
        }

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
                {errorMessage}
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Artist information:</h2>
                        {artistInfo}
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Results:</h2>
                        <FilteredList items={results.map(item => item.name)} onItemClick={this.handleArtistClick}/>
                    </div>
                </div>
            </div>
        );
    }
});