import { useState } from "react";

function Pet({pet, deletePet}){

    // console.log(setPets)

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    // function deletePet(){
    //     // console.log(pet)
    //     // const updatedPetsData = pets.filter(p => {
    //     //     return p.id !== pet.id
    //     // })

    //     setPets(currentPetsData => {
    //         const updatedPetsData = currentPetsData.filter(p => {
    //             return p.id !== pet.id;
    //         })
    //         return updatedPetsData
    //     })
        
    // }
    console.log(pet)

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            <button onClick={() => deletePet(pet.id)} className="adopt-button">Adopt</button>
        </li>
    );
}

export default Pet;