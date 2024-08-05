import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {pets} from './data/petsData'

const liElements = pets.map(pet => {
  return (
  <li key={pet.id} className='pet'>
    <img src={pet.image}/>
    <h4>{pet.name}</h4>
  </li>
  )
})

console.log(liElements)

function App() {
  return (
    <div className = "app">
      <Header />
      <ul className="pets-list">
        {liElements}
      </ul>
    </div>
  );
}

export default App;
