import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Animal } from "./Animal"
import "./Animal.css"
import { Link, useHistory } from "react-router-dom"

export const AnimalList = () => {
  //Need a little more help understanding this
  //I think what is happening is passing in the AnimalContext from AnimalProvider, then? I know it accesses the keys, but how is fuzzy 
    const { getAnimals, animals } = useContext(AnimalContext)

    const history = useHistory()
    // Initialization effect hook -> Go get animal data
    //The useEffect() hook allows the component to reach out into the world for anything that cannot be handled during render
    //it is the API call for the animals.
    useEffect(()=>{
        getAnimals()
       /*  The dependency array. Logic within functions only occur when a function is invoked. 
        Within a React component, useEffect is a function. 
        After the return, useEffect is automatically invoked and since the dependency array is empty, 
        it only runs the first time the component renders. 
        You can include dependencies in the array to cause the useEffect to run additional times.*/
    }, []) //like a .then() method?

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Add Animal
            </button>

            <div className="animals">
                
                {animals.map((animal) => (
                  <div className="animal" id={`animal--${animal.id}`}>
                    <div className="animal__name">
                      <Link to={`/animals/detail/${animal.id}`}>
                      { animal.name }
                      </Link>
                    </div>
                      { animal.breed }
                    </div>
                    )
                    )
                }
            </div>
        </>
    )
}
