

function PetList({myPets}){
    // console.log(props)
    const liElements = myPets.map(pet => {
        return (
        <li key={pet.id} className='pet'>
          <img src={pet.image}/>
          <h4>{pet.name}</h4>
        </li>
        )
      })

    return (
<ul className="pet-list">
        {liElements}
      </ul>
    )
}

export default PetList