import {useState} from 'react'

function Pet({pet}){
    const [numberOfLikes, setNumberOfLikes] = useState(0);
    const [displayAnimalType, setDisplayAnimalType]  = useState(false);

    // console.log(useState)

    // console.log(numberOfLikes)
    function handleClick(){
        setNumberOfLikes((numberOfLikes) => numberOfLikes + 1)
        // setNumberOfLikes((numberOfLikes) => numberOfLikes + 1)
    }

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(!displayAnimalType)
        // console.log(displayAnimalType)
    }

    // let petTextValue = pet.name

    // function updatePetTextValue(){
    //     if (displayAnimalType === false) {
    //       return  petTextValue = pet.name;
    //     } else {
    //         return petTextValue = pet.animal_type
    //     }
    // }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "" : "display-animal-type"}>{!displayAnimalType ? pet.name : pet.animal_type}</h4>
            <button onClick={handleClick} className="like-button">{numberOfLikes} Likes</button>
        </li>
    );
}

export default Pet;