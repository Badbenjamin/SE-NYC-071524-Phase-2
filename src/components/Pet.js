function Pet({pet}){
    console.log(pet)
    return(
       <li className="pets">
        <img className="pet image" src={pet.image} alt={pet.name}/>
        <h4>{pet.name}</h4>
       </li> 
    )
}

export default Pet