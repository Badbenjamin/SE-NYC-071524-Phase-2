import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PetList from './components/PetList';
import { pets } from './data/petsData';

console.log(pets)
  function App() {
    return (
      <div className = "app">
        <Header />
        <PetList myPets={pets}/>
      </div>
  );
}

export default App;
