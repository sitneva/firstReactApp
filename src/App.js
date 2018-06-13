import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Ira', age: 22},
            {name: 'Ted', age: 34},
        ],
        showPersons: false

    }

    swithNameHandler = (newName) => {
        console.log('Was clicked');
        this.setState({
            persons: [
                {name: newName, age: 18},
                {name: 'Ira', age: 220},
                {name: 'Ted', age: 34},
            ]
        })
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: event.target.value, age: 18},
                {name: 'Ira', age: 220},
                {name: 'Ted', age: 34},
            ]
        })
    }

    toggleShowPersonsHandler = () => {
        let show = this.state.showPersons;
        this.setState({showPersons: !show});
    }



  render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding:'8px',
            cursor: 'pointer'
        }
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        changed={this.nameChangeHandler}></Person>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.swithNameHandler.bind(this, 'NEW!!!')}>Test test!!!!!!</Person>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
                </div>
            )
        }
    return (
      <div className="App">
          <h1>My react app</h1>
          <button
              style = {style}
              onClick={this.toggleShowPersonsHandler}>Show people</button>
          {persons}
      </div>
    );
  }
}

export default App;
