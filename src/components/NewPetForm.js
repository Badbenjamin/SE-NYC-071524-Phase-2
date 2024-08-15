import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

function NewPetForm() {

  const {addPet} = useOutletContext()

  // way to navegate to other page programatically 
  const navegate = useNavigate()
  console.log(useNavigate)

  // This will take us home on re render
  // navegate(`/`)


  const [formData, setFormData] = useState({
    name: "",
    image: "",
    animal_type: ""
  })

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()

    const newPet = {
      ...formData
    }

    addPet(newPet)
    
    setFormData({
      name: "",
      image: "",
      animal_type: ""
    })
    // invoke useNavigate after form submission
    // takes us back home
    navegate('/')
  }

  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name} required />
        <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} required />
        <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} required />
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
  
  export default NewPetForm;