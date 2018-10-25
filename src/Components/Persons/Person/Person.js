import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Person.css';
import {AuthContext} from '../../../Containers/App'

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if (this.props.position === 0 ) {
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render () {
        console.log('[Person.js] Inside render()');
        return (
        // const rnd = Math.random();

        // if (rnd > 0.7) {
        //     throw new Error('Something went wrong');
        // }
            <div className="Person">
                <AuthContext.Consumer>
                    {auth => auth ? <p>Im authenticated</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </div>
        )   
    }    
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person; 