// destructure props within the function arg 
function Header({name, age}){
// Where is header being rendered? App!
    // console.log(person)
    // descruture object {}, be specific with key and value pairs. only existing
    // arrays []...
    // const {name, age} = person
    // console.log(age)
    // console.log(name)

    return(
        <header>
            <h1>Flatapets{name+age}
                <span className="logo">🐈</span>
            </h1>
        </header>
    )
}

export default Header