import React from "react";
import EmployeeTable from './components/EmployeeTable';
import EmployeeSearch from "./components/SearchEmp";
import Jumbotron from './components/Header';
import API from './utils/API';



class App extends React.Component {
  state = {
 list: [],
original_data: [] }

  

//this will list the people on the dashboard from API 

componentDidMount() {
    API.retrievePeople()
      .then(results => {
      

        const employees = results.data.results.map(employee => ({
          img: employee.picture.thumbnail,
          first_name: employee.name.first,
          last_name: employee.name.last,
          email: employee.email,
          dob: employee.dob.date,
          
        }))

        this.setState({ list: employees, original_data: employees })
      })
      .catch(err => console.warn(err))
  }

  handleSearch = value => {
    if (value)
      value = value.toLowerCase()

    this.setState({
      list: this.state.original_data.filter(employee => 
        employee.first_name.toLowerCase().includes(value) ||
        employee.last_name.toLowerCase().includes(value) ||
        employee.email.toLowerCase().includes(value) ||
        employee.dob.toLowerCase().includes(value))
    })

  }

  //sorting 



  //jumbotron heading

  render() {
    return <>
    <Jumbotron>
      <h1 className="display-4">Employee Directory</h1>
      <EmployeeSearch handleSearch={this.handleSearch} />
    </Jumbotron>
      <EmployeeTable list={this.state.list} />
    </>
  }
}

export default App;

