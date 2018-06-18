import React, { PureComponent } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import myAux from '../hoc/MyAux'

class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
        this.state = {
            persons: [
                {id:'1',name: 'Max', age: 18},
                {id:'2',name: 'Ira', age: 220},
                {id:'3',name: 'Ted', age: 34}
            ],
            showPersons: false,
            toggleClicked:0
        }
    }

    componentWillMount(){
        console.log('[App.js] Inside componentWillMount()');
    }
    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
    }
    /*shouldComponentUpdate (nextProps, nextState){
        console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
        return nextState.persons !== this.state.persons ||
                nextState.showPersons !== this.state.showPersons;
        //return true;
    }*/
    componentWillUpdate (nextProps, nextState) {
        console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
    }
    componentDidUpdate () {
        console.log('[UPDATE App.js] Inside componentDidUpdate()' );
    }

    // state = {
    //     persons: [
    //         {id:'1',name: 'Max', age: 18},
    //         {id:'2',name: 'Ira', age: 220},
    //         {id:'3',name: 'Ted', age: 34}
    //     ],
    //     showPersons: false
    //
    // }

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
        this.setState((prevState, props) => {
            return {
                showPersons: !show,
                toggleClicked: prevState.toggleClicked + 1
            }
        })
    }



  render() {

        console.log('[App.js] Inside render()');
        let persons = null;


        if (this.state.showPersons) {
            persons = <Persons
                        persons = {this.state.persons}
                        clicked = {this.deletePersonHandler}
                        changed = {this.nameChangeHandler} />;
        }

        return (
              <myAux>
                  <button onClick={() => {this.setState({showPersons: true})}}>Show persons</button>
                   <Cockpit
                       appTitle = {this.props.title}
                       showPersons={this.state.showPersons}
                       persons={this.state.persons}
                       clicked={this.toggleShowPersonsHandler}
                   />
                  {persons}
              </myAux>
        );
  }
}

export default withClass(App, classes.App);
