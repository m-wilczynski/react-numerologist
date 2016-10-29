import React from 'react';

class NumberDefinitionKeywords extends React.Component {
    render() {
        return (
            <div>
                <p>
                { this.props.keywords.map((val, ind) => 
                    <strong className="keyword-badge" key={ind}> { val } </strong>
                )}
                </p>
            </div>
        );
    }
}

export default NumberDefinitionKeywords;