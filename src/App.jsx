import './style.css';
import littleWomen from './assets/little-women.jpg';
import deadPoetsSociety from './assets/dead-poets-society.jpg';
import divergent from './assets/divergent.jpg';
import hungerGames from './assets/hunger-games.jpg';
import mazeRunner from './assets/maze-runner.jpg';
import straw from './assets/straw.jpg';
import aWalkToRemember from './assets/a-walk-to-remember.jpg';
import hiddenFigures from './assets/hidden-figures.jpg';


function App() {
  

  return (
    <section>

      <header>
        <h1>Movies I Wish I Could Watch for The First Time</h1>
        <p>What do you wish you could watch for the first time again?</p>
        <div className="divider">──── ✦ ────</div>
      </header>

      <h2>🎬 My Favorite Movies</h2>

      <div className="movie-container">

      <div className="movie-card">

        
        <img src={littleWomen} alt="Little Women" />
        <h3>Little Women</h3>
        <div className="rating">★★★★★</div>
      </div>

      <div className="movie-card">
        <img src={deadPoetsSociety} alt="Dead Poets Society" />
        <h3>Dead Poets Society</h3>
        <div className="rating">★★★★★</div>
      </div>

      <div className="movie-card">
        <img src={divergent} alt="Divergent" />
        <h3>Divergent</h3>
        <div className="rating">★★★★☆</div>
      </div>

      <div className="movie-card">
        <img src={hungerGames} alt="The Hunger Games" />
        <h3>The Hunger Games</h3>
        <div className="rating">★★★★☆</div>
      </div>

      <div className="movie-card">
        <img src={mazeRunner} alt="The Maze Runner" />
        <h3>The Maze Runner</h3>
        <div className="rating">★★★★★</div>
      </div>

      <div className="movie-card">
        <img src={straw} alt="Straw" />
        <h3>Straw</h3>
        <div className="rating">★★★★★</div>
      </div>

      <div className="movie-card">
        <img src={aWalkToRemember} alt="A Walk to Remember" />
        <h3>A Walk to Remember</h3>
        <div className="rating">★★★★☆</div>
      </div>

      <div className="movie-card">
        <img src={hiddenFigures} alt="Hidden Figures" />
        <h3>Hidden Figures</h3>
        <div className="rating">★★★★★</div>
      </div>

      </div>

    </section>
    
  )
}

export default App
