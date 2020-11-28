import React from 'react';

export default (props) => {
    return (
        <>
    <div className="text-center">
    <input type="text" className="" placeholder="Search Employees" 
    onChange={employee => props.handleSearch(employee.target.value)} />
    </div>
    </>
    )
};