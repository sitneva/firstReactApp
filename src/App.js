import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

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
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding:'8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: '#0a0',
            color: '#000'
        }
    }
    let persons = null;
    if (this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map((person, index) => {
                    return  <Person
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed = {(event) => this.nameChangeHandler(event, person.id)}
                    ></Person>
                })}
            </div>
        );

        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        };
    }

    let classes = [];
    if(this.state.persons.length <= 2) {
        classes.push('red');
    }
    if(this.state.persons.length <= 1) {
        classes.push('bold')
    }

    return (
        <StyleRoot>
          <div className="App">
              <h1>My react app</h1>
              <p className={classes.join(' ')}>Test texts with dunamic texts</p>
              <button
                  style = {style}
                  onClick={this.toggleShowPersonsHandler}>Show people</button>
              {persons}
          </div>
        </StyleRoot>
    );
  }
}

export default Radium(App);
