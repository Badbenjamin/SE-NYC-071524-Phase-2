import PetList from "./PetList";
import pets from "../data/pets";

import { useState } from "react";
import Search from "./Search";

// console.log(pets)

function PetPage(){

    const [petsArray, setPetsArray] = useState(pets)
    const [searchText, setSearchText] = useState("")

    const filteredPets = petsArray.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    function deletePet(id){
        console.log("id",id)
        const updatedPetsData = petsArray.filter(p => {
            return p.id !== id
        })

        setPetsArray(updatedPetsData) 
    }

    console.log(filteredPets)

    return (
        <main>
            <Search setSearchText={setSearchText} />
            <PetList deletePet={deletePet} pets={filteredPets}/>
        </main>
    );
}

export default PetPage;