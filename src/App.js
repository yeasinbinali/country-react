import './App.css';
import CountriesContainer from './components/CountriesContainer/CountriesContainer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CountriesContainer></CountriesContainer>
    </div>
  );
}

export default App;
