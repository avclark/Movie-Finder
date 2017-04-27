var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
  render: function() {
    return(
      <div className="search-form">

        <form onSubmit={this.onSubmit}>
          <input type="text" className="form-control" ref="title" placeholder="Enter a movie title and hit enter..." />
          <input type="submit" className="button submit-button" value="Search Movies" />
        </form>
      </div>
    )
  },

  onSubmit: function(e) {
    e.preventDefault();

    var movie = {
      title: this.refs.title.value.trim()
    }

    AppActions.searchMovies(movie);
  }
});

module.exports = SearchForm;