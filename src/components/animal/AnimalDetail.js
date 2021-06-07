import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { useParams, useHistory } from "react-router-dom";

export const AnimalDetail = () => {
  const { animals, releaseAnimal } = useContext(AnimalContext);
   //location holds the initial state of the application
    //setLocation allows us to update state
  const [animal, setAnimal] = useState({ location: {}, customer: {} }); //explain what is happening here. is tis deconstructing location and customer to be allowed access in the return state

  /*
        Given the example URL above, this will store the value
        of 5 in the animalId variable
    */
  const { animalId } = useParams();

  const history = useHistory();

  const handleRelease = () => {
    releaseAnimal(animal.id).then(() => {
      history.push("/animals");
    });
  };

  useEffect(() => {
    const thisAnimal = animals.find((a) => a.id === parseInt(animalId)) || {
      location: {},
      customer: {},
    };

    setAnimal(thisAnimal);
  }, [animalId]);

  return (
    <section className="animal">
      <button onClick={handleRelease}>Release Animal</button>
      <button
        onClick={() => {
          history.push(`/animals/edit/${animal.id}`);
        }}
      >
        Edit
      </button>
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">Breed: {animal.breed}</div>
      <div className="animal__location">Location: {animal.location.name}</div>
      <div className="animal__owner">Customer: {animal.customer.name}</div>
    </section>
  );
};
