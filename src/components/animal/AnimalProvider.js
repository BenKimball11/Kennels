import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
//nothing is stored in context when it is defined. it is waiting to be filled with information
export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
    //animals holds the initial state of the array
    //setAnimals allows you to update state in the array
    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=customer&_expand=location&_sort=location.id")
        .then(res => res.json())
        .then(setAnimals)
    }

    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(getAnimals)
    }

    const releaseAnimal = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}`, {
            method: "DELETE"
        })
            .then(getAnimals)
    }

    const updateAnimal = animal => {
        return fetch(`http://localhost:8088/animals/${animal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(animal)
        })
          .then(getAnimals)
      }

    /*   const getAnimalById = animalId => {
        return fetch (`http://localhost:8088/animals/${animalId}?_expand=customers`)
        .then(res => res.json())
        } */
    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        //in chapter 1 it says all we need to worry about understanding is the variables in th value attribute
        //so this allows other components to import AnimalContext to use/invoke each of the functions in the value? correct?
        //what is the .Provider doing?
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, releaseAnimal, updateAnimal, 
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}