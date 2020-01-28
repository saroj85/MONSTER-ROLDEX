import React, { Component } from 'react';
import Card from './component/card/card';
import Table from './component/table/table';
import Input from './component/search/search';
import './app.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      search: ""

    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users: users }));

  }

  render() {
    const { users, search } = this.state;
    const filterUser = users.filter(user => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    })

    return (   
      <div>
        <h1 style={{color: "#fff", fontSize: "5vw", textAlign: "center"}}>MONSTER ROLDEX</h1>
        {/* <Table /> */}
        <div style={{ textAlign: 'center' }}>
          <Input type="text" value={this.state.search} placholder="Enter Name" handlerChange={e => this.setState({ search: e.target.value })} />
        </div>
        <br></br>
        <br></br>
        <Card users={filterUser}></Card>

        {filterUser && filterUser.length <= 0 && 
            <h3 style={{textAlign: "Center"}}>User Not Found</h3>}

      </div>
    )
  }
}

export default App;