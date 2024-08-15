import { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";

function Pet({pet}){
    console.log(pet.id)

    // const {pets, deletePet, updatePet} =useOutletContext()

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            {/* clicking link returns pet.id  */}
            <Link to={`/pets/${pet.id}`}>{`View ${pet.name}'s profile`}</Link>
        </li>
    );
}

export default Pet;