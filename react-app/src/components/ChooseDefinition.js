import React from 'react';
import { Link } from 'react-router';

class ChooseDefinition extends React.Component {
    render() {
        return (
            <div>
                <h5>Choose how will we define your number</h5>
                <p>You need to either provide your full name or birth date,
                so that numerology-based calculation can be performed.
                Output of calculation will also provide you with description of your number.</p>
                <div className="button-group">
                    <Link className="button six columns" to="/byFullname">By Fullname</Link>
                    <Link className="button six columns" to="/byBirthdate">By Birthdate</Link>
                </div>
            </div>
        );
    }
}

export default ChooseDefinition;