import { useParams } from "react-router-dom"

function ExampleComponent(){

        // useParams() when invoked returns the URL endpoint {id: endpoint}
    console.log(useParams())


    // destucture parameters obj
    const {id} = useParams()
    console.log(id)

    return <h1>Examp{id}</h1>
}

export default ExampleComponent