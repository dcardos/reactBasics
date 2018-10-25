import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {

    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button, classes.red].join(' ');
    }


    return (
        <>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                className={btnClass}
                onClick={props.clicked}
            > 
            Show people
            </button>
            <button onClick={props.login}>Log in</button>
        </>
    );
};

export default React.memo(cockpit);