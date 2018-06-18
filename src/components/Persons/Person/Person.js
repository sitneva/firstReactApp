import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import MyAux from '../../../hoc/MyAux';

class Person extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
    }
    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position === 0 ){
            this.inputElement.current.focus();
        }

    }
    componentWillReceiveProps (nextProps) {
        console.log('[UPDATE Person.js] Inside componentWillReceiveProps()', nextProps);
    }

    focus() {
        this.inputElement.current.focus();
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
            <MyAux>
                <p onClick={this.props.click}>Hi, I am {this.props.name} and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </MyAux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    age: PropTypes.number,
    name: PropTypes.string,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);