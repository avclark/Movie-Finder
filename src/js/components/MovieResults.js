var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Movie = require('./Movie.js');

var MovieResults = React.createClass({
  render: function() {
    return(
      <div class="results-wrap">
        {
            this.props.movies.map(function(movie, i){
                return(
                    <Movie movie={movie} key={i} />
                )
            })
        }
      </div>
    )
  }
});

module.exports = MovieResults;