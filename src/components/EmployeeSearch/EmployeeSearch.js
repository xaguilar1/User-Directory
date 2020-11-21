import React from 'react';

export default (props) => {
    return (
        <>
    <div className="text-center">
    <input type="text" className="" placeholder="Search Employees" 
    onChange={e => props.handleSearch(e.target.value)} />
    </div>
    </>
    )
};