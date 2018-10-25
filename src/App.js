import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './App.css';

class App extends Component {
  state = {
    username: 'Estaytona'
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const inlineStyle = {
      border: '1px solid blue',
      padding: '16px',
      margin: '8px'
    };

    return (
      <div className="App" style={inlineStyle}>
        <UserOutput username='Primadona' />
        <UserOutput username='Secundonna' />
        <UserOutput username={this.state.username}/>
        <UserInput 
          username={this.state.username} 
          change={this.changeUsernameHandler}
        />
      </div>
    );
  }
}

export default App;
