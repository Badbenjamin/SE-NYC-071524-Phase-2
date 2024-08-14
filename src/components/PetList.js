import Pet from "./Pet";

function PetList({ pets, deletePet, updatePet }){

    const petComponents = pets.map(pet => {
        return <Pet updatePet={updatePet} key={pet.id} pet={pet} deletePet={deletePet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;