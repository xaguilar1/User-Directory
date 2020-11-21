import React from "react";
import moment from "moment";

function EmployeeTable(props) {
    return (
      <>
      <div className="row background">
    <div className="col col-lg-2"></div>
    <div className="col col-lg-8">
    <table className="table">
      <thead>
        <tr>
          <th>Photo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Birth Date</th>
        </tr>
      </thead>
      <tbody>
      
        {
          props.list.map((x, i) => <tr key={i + "-key"}>
            <td><img src={x.img} alt="thumbnail" /></td>
            <td>{x.first_name}</td>
            <td>{x.last_name}</td>
            <td>{x.email}</td>
            <td>{moment(x.dob).format("MM-DD-YYYY")}</td>
          </tr>)
        }
      </tbody>
    </table>
</div>
<div className="col col-lg-2"></div>
</div>
</>
    )
};

export default EmployeeTable;