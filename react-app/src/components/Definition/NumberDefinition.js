import React from 'react';
import NumberDefinitionKeywords from './NumberDefinitionKeywords';

class NumberDefinition extends React.Component {
    render() {
        return (
            <div>
                <h4>Number { this.props.data.Number } </h4>
                <p> { this.props.data.Planet } </p>
                <NumberDefinitionKeywords keywords={this.props.data.Keywords} />
                <p>{ this.props.data.GeneralDescription } </p>
                <p>{ this.props.data.AsLoversDescription } </p>
                <p>{ this.props.data.PrecautionsDescription } </p>
            </div>
        );
    }
}

export default NumberDefinition;