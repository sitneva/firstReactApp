import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let btnClass ='';

    if (this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map((person, index) => {
                    return  <ErrorBoundary key={person.id}>
                        <Person
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed = {(event) => this.nameChangeHandler(event, person.id)}
                        ></Person>
                    </ErrorBoundary>
                })}
            </div>
        );
        btnClass = classes.Red;
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1) {
        assignedClasses.push(classes.bold)
    }

    return (
          <div className={classes.App}>
              <h1>My react app</h1>
              <p className={assignedClasses.join(' ')}>Test texts with dunamic texts</p>
              <button
                  className={btnClass}
                  onClick={this.toggleShowPersonsHandler}>Show people</button>
              {persons}
          </div>
    );
  }
}

export default App;
