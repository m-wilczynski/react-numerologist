import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <p>This is a simple application about numerology.</p>
                <p>All of it's possible thanks to React.js, ASP.NET Core and Skeleton CSS</p>
                <Link to="/chooseDefinition">Let's start!</Link>
            </div>
        );
    }
}

export default Home;