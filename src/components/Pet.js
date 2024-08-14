import { useState } from "react";

function Pet({pet, deletePet, updatePet}){
    // console.log(pet)
    // SET FORM DATA TO ORIGIONAL PET DATA 
    // MAKE FORM CONTROLLED BY FORMDATA INFO
    // NOW THE FORM IS POPULATED WITH THE ORIGINAL DATA
    const [formData, setFormData] = useState({
        name: pet.name,
        image: pet.image,
        animal_type: pet.animal_type
    })
    // console.log(formData)
    // console.log(pet.likes)

    const [displayAnimalType, setDisplayAnimalType] = useState(false)
    const [displayForm, setDisplayForm] = useState(false)

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    function handleAdoptButtonClick(){
        deletePet(pet.id)
    }

    function increasePetLikes(){
       const updatedPetData = {
        // ...pet,
        likes: pet.likes + 1
    }
        updatePet(updatedPetData, pet.id)
    }
    
    function toggleDisplayForm(){
        setDisplayForm(displayForm => !displayForm)
    }

    function handleSubmit(e){
        e.preventDefault()
        setFormData(formData)
        updatePet(formData, pet.id)
        toggleDisplayForm()
        console.log("sub")

    }

    function updateFormData(e){
        // console.log(e.target.value)
        console.log(e.target.name)
        setFormData({...formData, [e.target.name]: e.target.value})

    }


    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            { !displayForm ?
            <div className="button-div">
                <button onClick={toggleDisplayForm} className="update-button">Update Pet</button>
                <button onClick={increasePetLikes} className="like-button">{pet.likes} Likes</button>
                <br/>
                <button onClick={handleAdoptButtonClick} className="adopt-button">Adopt</button>
            </div> :
            <form onSubmit={handleSubmit} className="edit-pet">
                <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name}/>
                <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image}/>
                <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type}/>
                <button type="submit">Save Changes</button>
            </form>
            }
        </li>
    );
}

export default Pet;