import './App.css';
import StarRating from './stars';
import OldStarRating from './oldStars'

function App() {
  return (
    <div className="App">
     <h1> Stars using hooks </h1>
     <StarRating/>
     <h1> Stars without hooks </h1>
     <OldStarRating totalStars={5} />
     <p> The functionality is the same in both cases but using hooks  requires less code. </p>
    </div>
  );
}

export default App;
