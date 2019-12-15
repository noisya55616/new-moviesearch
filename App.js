import React, { Component } from 'react';
//const API = 'https://hn.algolia.com/api/v1/search?query=';
const API = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';
let QUERY = window.prompt("movie name");
const KEY = '&api-key=WVICcXJihODRENAK1SggWsXqtKEXkodf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  componentDidMount() {
    fetch(API+QUERY+KEY) //+ DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ results: data.results }));
  }
  render() {
    const { results } = this.state;
    return (
      <ul>
        {results.map(result =>
          <ul>
            <li><a href={result.link.url}>{result.display_title}</a></li>
          </ul>
        )}
      </ul>
    );
  }
}
export default App;