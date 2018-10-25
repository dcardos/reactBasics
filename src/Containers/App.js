import React, { PureComponent } from 'react';
import classes from './App.module.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'

export const AuthContext = React.createContext(false);

class App extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
        // It is possible to initiate state here:
        // this.state = {
        //     persons: [
        //         { id: 'avt1', name: 'Max', age: 28 },
        //         { id: 'asd2', name: 'Manu', age: 29 },
        //         { id: 'ffs3', name: 'Stephanie', age: 26 }
        //     ],
        //     showPersons: false
        // }
    }

    // discoreged
    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
    }

    // using PureComponent for this
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    // discoreged
    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('[UPDATE App.js] Inside getDerivedStateFromProps', nextProps, prevState);
        return prevState;
    }

    getSnapshotBeforeUpdate() {
        // can save scrolling position here for example
        console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate');
    }

    componentDidUpdate() {
        // can restore the scrolling position for example
        console.log('[UPDATE App.js] Inside componentDidUpdate');
    }

    state = {
        persons: [
            { id: 'avt1', name: 'Max', age: "28" },
            { id: 'asd2', name: 'Manu', age: 29 },
            { id: 'ffs3', name: 'Stephanie', age: 26 }
        ],
        showPersons: false,
        toggleClicked: 0,
        isAuthenticated: false
    }

    logginHandler = () => {
        this.setState( {isAuthenticated: true});
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];    // spread operator to clone array
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(someone => {
            return someone.id === id;
        });

        // making a shallow copy
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState( {persons: persons} );
    }

    togglePersonsHandler = () => {
            const doesShow = this.state.showPersons;
            this.setState( (prevState, props) => {
                return {
                    showPersons: !doesShow,
                    toggleClicked: prevState.toggleClicked + 1
                }
                
            });
    }

    render() {
        console.log('[App.js] inside render()');
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons 
                    persons = {this.state.persons}
                    clicked = {this.deletePersonHandler}
                    changed = {this.nameChangedHandler}
                />
            );
        }  

        return (
            <div className={classes.App}>
                <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                <Cockpit 
                    appTitle = {this.props.title}
                    showPersons = {this.state.showPersons}
                    persons = {this.state.persons}
                    clicked = {this.togglePersonsHandler}
                    login={this.logginHandler}
                />
                <AuthContext.Provider value={this.state.isAuthenticated}>
                    {persons}
                </AuthContext.Provider>
            </div>
        );
    }
}

export default App;
