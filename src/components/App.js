import Header from "./Header";
import PetList from "./PetList";
import { useState, useEffect } from "react";
import NewPetForm from "./NewPetForm";
import ErrorPage from "./ErrorElement";
import NavBar from "./NavBar";
// outlet lets us pass props and info to components using CONTEXT prop
import { Outlet } from "react-router-dom";


function App(){

    const [pets, setPets] = useState([])
    // const [route, setRoute] = useState(window.location.pathname)

    // let component = null
    // if(route === "/"){
    //   component = <PetList pets={pets} deletePet={deletePet} updatePet={updatePet}/>
    // }
    // else if(route === "/add_pet"){
    //   component = <NewPetForm addPet={addPet}/>
    // } else {
    //     component = <ErrorPage/>
    // }

    useEffect(() => {
        fetch('http://localhost:4000/pets')
        .then(response => response.json())
        .then(petsData => setPets(petsData))
    }, [])

    function deletePet(id){
        fetch(`http://localhost:4000/pets/${id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                setPets((pets) => pets.filter(pet => {
                    return pet.id !== id
                }))
            }
            else{
                alert("Error: Unable to delete pet!")
            }
        })
    }

    function addPet(newPet){
        fetch('http://localhost:4000/pets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...newPet, likes: 0})
        })
        .then(response => response.json())
        .then(newPetData => setPets([...pets, newPetData]))
    }

    function updatePet(id, petDataForUpdate){
        fetch(`http://localhost:4000/pets/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(petDataForUpdate)
        })
        .then(response => response.json())
        .then(updatedPet => setPets(pets => pets.map(pet => {
            if(updatedPet.id === pet.id){
                return updatedPet
            }
            else{
                return pet
            }
        })))
    }

    // function navigate(event){
    //   event.preventDefault()
    //   console.log(event.target.href)
    // //   console.log(pathname)
    // //   window history pushState is how we navegate to another window by changing the URL path
    //   window.history.pushState(null, "", event.target.href);
    // //   This updates the route state to the current URL path
    // // the logic at line 11 will decide what component to display 
    // // depending on the route
    //   setRoute(window.location.pathname)
    // }

    return (
      <div className="app">
        <NavBar/>
        {/* <nav className="navbar">
          <a className={route === "/" ? "active" : ""} onClick={navigate} href="/">Home</a>
          <a className={route === "/add_pet" ? "active" : ""} onClick={navigate} href="/add_pet">Add Pet</a>
        </nav> */}
        <Header/>
        {/* OUTLET lets children render? */}
        {/* desructure pets to take value of pets from pets */}
            <Outlet context={{pets: pets, deletePet: deletePet, updatePet: updatePet, addPet: addPet}}/>
        {/* <NewPetForm addPet={addPet}/>
        <PetList pets={pets} deletePet={deletePet} updatePet={updatePet}/> */}
        {/* {component} */}
      </div>
    );
}

export default App;