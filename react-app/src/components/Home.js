import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h5>Welcome!</h5>
                <p>This is a simple application about numerology.
                It will accept either your birthdate or fullname and will produce
                your number based on numerological calculations along with description of
                result you've received. <br/>
                Solution is based on React.js, ASP.NET Core and SkeletonCSS.</p>
                <Link className="button" to="/chooseDefinition">Let's start!</Link>
            </div>
        );
    }
}

export default Home;