import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  //useEffect - reach out to the world for something
  useEffect(() => { //useEffect reacts to state changes
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()
  }, [])


  return (
    <section className="employees">
      {console.log("EmployeeList: Render", employees)}
      {
        employees.map(employee => {
          return (
            <div className="employee" key= {employee.id} id={`employee--${employee.id}`}>
              <div className="employee__name">
                Name: { employee.name }
              </div>
              <div className="employee__location">
                location: { employee.location.name }
              </div>
            </div>
          )
        })
      }
    </section>
  )
}