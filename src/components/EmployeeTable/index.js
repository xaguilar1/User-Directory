import React from "react";
import moment from "moment";

function EmployeeTable(props) {
    return ( <>
    <div className="row background">
      {/* //keeps items centered V */}
    <div className="col col-lg-2"></div>
    <div className="col col-lg-8">
    <table className="table">

      {/* //table head with row and headers */}

      <thead>
        <tr>
          <th><a href="#"> Photo</a></th>
          <th><a href="#">First Name</a></th>
          <th><a href="#">Last Name</a></th>
          <th><a href="#">Email</a></th>
          <th><a href="#">Birth Date</a></th>
          
        </tr>
        
      </thead>
      
      <tbody>
        
        {/* //table with employee info */}
      
        {
          props.list.map((employee) => 
          <tr>
            <td><img src={employee.img} alt="thumbnail" /></td>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.email}</td>
            <td>{moment(employee.dob).format("MM-DD-YYYY")}</td>
          </tr>)
          
        }
      </tbody>
      
    </table>
    </div>

</div>
</>
    )
};

export default EmployeeTable;
