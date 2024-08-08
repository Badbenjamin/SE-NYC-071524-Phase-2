// import { useState } from "react"

function Search({setSearchText}){


    // setPets(pets.filter(pet => {
    //     return pet.name.toUpperCase().includes(props.searchText.toUpperCase())
    // }))

    

    return(
        <div className="searchbar">
                <label htmlFor="search">Search Pets:</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Type a name to search..."
                    onChange={(event) => setSearchText(event.target.value)}
                />
        </div>
    )
}

export default Search