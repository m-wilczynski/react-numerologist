import React from 'react';
import { Link } from 'react-router';

class ChooseDefinition extends React.Component {
    render() {
        return (
            <div>
                <Link to="/byFullname">By Fullname</Link>
                <Link to="/byBirthdate">By Birthdate</Link>
            </div>
        );
    }
}

export default ChooseDefinition;