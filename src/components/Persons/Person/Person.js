import React, {PureComponent} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import myAux from '../../../hoc/MyAux';

class Person extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    }

    componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
    }
    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
    }
    componentWillReceiveProps (nextProps) {
        console.log('[UPDATE Person.js] Inside componentWillReceiveProps()', nextProps);
    }
    /*shouldComponentUpdate (nextProps, nextState){
        console.log('[UPDATE Person.js] Inside shouldComponentUpdate()', nextProps, nextState);
        return nextProps.persons !== this.props.persons ||
                nextProps.changed !== this.props.changed ||
                nextProps.click !== this.props.click;
        //return true;
    }*/
    componentWillUpdate (nextProps, nextState) {
        console.log('[UPDATE Person.js] Inside componentWillUpdate()', nextProps, nextState);
    }
    componentDidUpdate () {
        console.log('[UPDATE Person.js] Inside componentDidUpdate()' );
    }

    render () {
        console.log('[Person.js] Inside render()');
        return (
            <myAux>
                <p onClick={this.props.click}>Hi, I am {this.props.name} and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </myAux>
        )
    }
}


export default withClass(Person, classes.Person);