import { NavLink } from "react-router-dom"

function NavBar(){
    return(
       <nav className="navbar">
        <NavLink to="/">HOME</NavLink>
        {/* <NavLink to="/pets">PETS</NavLink> */}
        <NavLink to="/add_pet">+ PET</NavLink>
          {/* <a className={route === "/" ? "active" : ""} onClick={navigate} href="/">Home</a>
          <a className={route === "/add_pet" ? "active" : ""} onClick={navigate} href="/add_pet">Add Pet</a> */}
        </nav> 
    )
}

export default NavBar