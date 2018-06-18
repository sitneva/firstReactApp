import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
        this.lastPersonRef = React.createRef();
    }

    componentWillMount(){
        console.log('[Persons.js] Inside componentWillMount()');
    }
    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
        this.lastPersonRef.current.focus();
    }

    render(){
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map((person, index) => {
            return <Person
                position={index}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                ref = {this.lastPersonRef}
                key={person.id}
                changed = {(event) => this.props.changed(event, person.id)}
            ></Person>
        })
    }
}


export default Persons;