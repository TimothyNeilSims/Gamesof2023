import './App.css';
import Games from './components/Games';
import SiteCover from './assets/images/gamesoflastyear.jpg';

const App = () => {

  return (
    <div className="App">
      <img src={SiteCover} alt="Games of Last Year" className="site-cover" />
      <p className="image-source">Image source: <a href="https://www.gameinformer.com/2023" target="_blank" rel="noopener noreferrer">GameInformer</a></p>
      <h1>2023 in Gaming</h1>
      <h2>A look back at some of the most popular or unique releases from each month of 2023!</h2>
      <Games />
    </div>
  )
}

export default App
