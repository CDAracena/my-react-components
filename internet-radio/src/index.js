import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header'


const genreArray = ["Hip-Hop", "Blues", "R&B", "Bachata", "Merengue", "Rap", "Reggae", "Reggaeton", "Latin Trap", "Salsa", "Country", "Banghra", "Pop", "EDM", "House", "Techno", "Heavy Metal", "Rock", "Punk",
"soul", "Funk", "Soca", "Calypso", "K-Pop", "Indian", "Garage", "Acapella", "Opera", "Dance", "Meditation", "Classical", "Soundtrack"]

const App = ({arr})=> {
  return (
    <div className="container">
      <Header title="Popular Genres"/>
      <div className="genre-container">
      {arr.map((genre, id) => <button key={id} style={{fontSize: `${id}px`}} className="genre-btn">{genre}</button>)}
    </div>

    </div>
  )
}

ReactDOM.render(<App arr={genreArray}/>, document.getElementById('root'))
