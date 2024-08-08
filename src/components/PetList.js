import Pet from "./Pet";
// import { useState } from "react";

function PetList({pets, deletePet}){

    const petComponents = pets.map(pet => {
        // not using unique key results in react bugs on re rendering lists
        return <Pet deletePet={deletePet} key={pet.id} pet={pet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;