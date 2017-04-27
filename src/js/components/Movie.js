var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Movie = React.createClass({
  render: function() {
    var link = 'http://www.imdb.com/title/'+this.props.movie.imdbID;

    return(
      <div className="large-3 medium-4 small-12 columns movie-wrap">
        <a className="movie-link" href={link}>
          <img className="movie-poster" src={this.props.movie.Poster} alt=""/>
        </a>
      </div>
    )
  }
});

module.exports = Movie;