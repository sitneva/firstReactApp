import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons: [
            {id:'1',name: 'Max', age: 18},
            {id:'2',name: 'Ira', age: 220},
            {id:'3',name: 'Ted', age: 34}
        ],
        showPersons: false

    }

    swithNameHandler = (newName) => {
        console.log('Was clicked');
        this.setState({
            persons: [
                {id:'1',name: newName, age: 18},
                {id:'2',name: 'Ira', age: 220},
                {id:'3',name: 'Ted', age: 34},
            ]
        })
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id ===id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        //Also we can use next (same as before)
        //const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});

    }

    toggleShowPersonsHandler = () => {
        let show = this.state.showPersons;
        this.setState({showPersons: !show});
    }



  render() {
    let persons = null;


    if (this.state.showPersons) {
        persons = <Persons
                    persons = {this.state.persons}
                    clicked = {this.deletePersonHandler}
                    changed = {this.nameChangeHandler} />;
    }

    return (
          <div className={classes.App}>
               <Cockpit
                   appTitle = {this.props.title}
                   showPersons={this.state.showPersons}
                   persons={this.state.persons}
                   clicked={this.toggleShowPersonsHandler}
               />
              {persons}
          </div>
    );
  }
}

export default App;
