import { v4 as uuid } from "uuid";

import { useState } from "react";

function NewPetForm({pets, addPet}) {
  

  const [nameInput, setNameInput] = useState("")
  const [imageInput, setImageInput] = useState("")
  const [animalTypeInput, setAnimalTypeInput] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    animal_type: "",
  })

  // console.log(uuid())

  // let newId;

  // if (pets.length > 0) {
  //   newId = pets[pets.length -1].id + 1
  // } else {
  //   newId = 1
  // }

  function handleSubmit(e){
    e.preventDefault();
    const newPet = {
      id: uuid(),
      ...formData
    }

    addPet(newPet)
    setFormData(
      {
      name: "",
      image: "",
      animal_type: ""
      }
    )
  }

  function handleChange(event){
    // if (event.target.name === 'name') {
    //   setNameInput(event.target.value)
    // } else if (event.target.name === 'image') {
    //   setImageInput(event.target.value)
    // } else if (event.target.name === 'animal_type') {
    //   setAnimalTypeInput(event.target.value)
    // }
    // console.log(event.target.name)

    // console.log({[event.target.name]: event.target.value})

    setFormData({...formData, [event.target.name]: event.target.value})
  }
  // console.log(animalTypeInput)

    return (
      <div className="new-pet-form">
        <h2>New Pet</h2>
        {/* event contained in handlesubmit*/}
        <form onSubmit={handleSubmit}>
          {/* <input onChange={handleChange} type="text" name="name" placeholder="Pet name" />
          <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
          <input onChange={handleChange} type="text" name="animal_type" placeholder="Animal type"/> */}
          {/* now inputs are controlled by state */}
          <input onChange={handleChange} type="text" name="name" placeholder="Pet name" value={formData.name}/>
          <input onChange={handleChange} type="text" name="image" placeholder="Image URL" value={formData.image}/>
          <input onChange={handleChange} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type}/>
          <button onChange={handleChange} type="submit">Add Pet</button>
        </form>
      </div>
    );
  }
  
  export default NewPetForm;