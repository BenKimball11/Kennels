import React, { useState, useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employee.css"
import { Link, useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const { getEmployees, employees } = useContext(EmployeeContext)

    const history = useHistory()
    // Initialization effect hook -> Go get Employee data
    useEffect(()=>{
        getEmployees()
    }, [])

    return (
        <>
            <h1>Employees</h1>

            <button onClick={() => history.push("/employees/create")}>
                Add Employee
            </button>

            <div className="employees">
                
                {employees.map((employee) => (
                  <div className="employee" id={`employee--${employee.id}`}>
                    <div className="employee__name">
                      <Link to={`/employees/detail/${employee.id}`}>{ employee.name }</Link>
                      </div>
                  </div>
                    )
                    )
                }
            </div>
        </>
    )
}