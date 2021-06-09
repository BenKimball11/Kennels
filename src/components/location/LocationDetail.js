import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const { getLocationById } = useContext(LocationContext)
    const [ location, setLocation ] = useState({employees: [], animals: []})
//if you have a dynamic route, your are just capturing what is at the end of the url? maybe rewatch. useParams() deconstructs the data
    const { locationId } = useParams();

    const history = useHistory()

    useEffect(() => {
        getLocationById(locationId)
        .then(location => {
            setLocation(location)
        })
    }, [locationId])

    return (
    <section className="location">
        <h2 className="location__name">{ location.name }</h2>
        <div className="location_address">{ location.address}</div>
        <h3>Employees</h3>
        {location.employees.map(employee => 
             <div>{employee.name}</div>
        )}
        <h3>Animals</h3>
        {location.animals.map(animal =>
            <div>{animal.name}</div>
            )}
        <button onClick={() => {history.push(`/locations/edit/${location.id}`)}}>Edit</button>
    </section>
    )
}