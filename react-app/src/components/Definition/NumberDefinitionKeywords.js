import React from 'react';

class NumberDefinitionKeywords extends React.Component {
    render() {
        return (
            <div>
                <p>
                { this.props.keywords.map((val, ind) => 
                    <span className="keyword-badge" key={ind}> { val } </span>
                )}
                </p>
            </div>
        );
    }
}

export default NumberDefinitionKeywords;