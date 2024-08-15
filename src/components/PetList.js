import Pet from "./Pet";
// hook lets us access context data from parents
// context needs an object to pass multiple pieces of data
import { useOutletContext } from "react-router-dom";

// with context, we don't need to pass props, useOutletContext
function PetList(){

    // destructure out useOutlet context object
    const {pets, deletePet, updatePet} = useOutletContext()
    console.log(pets, deletePet, updatePet)

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet} deletePet={deletePet} updatePet={updatePet}/>
        // <h1>this is a pet</h1>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;