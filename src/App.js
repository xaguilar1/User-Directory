import React from "react";
import EmployeeSearch from './components/EmployeeSearch';
import EmployeeTable from './components/EmployeeTable';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import API from './utils/API';


class App extends React.Component {
  state = {
 list: [],
original_data: [] }

  

//this will list the people on the dashboard 

componentDidMount() {
    API.retrievePeople()
      .then(results => {
      
      //peoples demo info

        const people = results.data.results.map(x => ({
          first_name: x.name.first,
          last_name: x.name.last,
          email: x.email,
          dob: x.dob.date,
          img: x.picture.thumbnail
        }))

        this.setState({ list: people, original_data: people })
      })
      .catch(err => console.warn(err))
  }

  handleSearch = value => {
    if (value)
      value = value.toLowerCase()

    this.setState({
      list: this.state.original_data.filter(x => x.first_name.toLowerCase().includes(value) ||
        x.last_name.toLowerCase().includes(value) ||
        x.email.toLowerCase().includes(value) ||
        x.dob.toLowerCase().includes(value))
    })

  }

  render() {
    return <>
    <Wrapper>
    <Jumbotron>
      <h1 className="display-4">Employee Directory</h1>
      <EmployeeSearch handleSearch={this.handleSearch} />
    </Jumbotron>
      <EmployeeTable list={this.state.list} />
      </Wrapper>
    </>
  }
}

export default App;

