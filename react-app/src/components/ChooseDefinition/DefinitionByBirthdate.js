import React from 'react';
import DefinitionsService from '../../services/DefinitionsService';
import NumberDefinition from '../Definition/NumberDefinition';

class DefinitionByBirthdate extends React.Component {
    constructor() {
        super();
        this.definitionsService = new DefinitionsService();
        this.state = {
            isLoading: true,
            definition: null
        };
    }
    render() {
        return (
            <div>
                { this.state.isLoading ? <p>Loading...</p> : ""}
                { this.state.definition != null ?
                    <NumberDefinition data={this.state.definition} /> 
                    : "" }
            </div>
        );
    }


    componentDidMount() {
        var component = this;
        this.definitionsService.getDefinitionByBirthdate(new Date("1/1/2015"), 
            function(response) {
                setTimeout(
                    function() {
                        component.setState(
                        { 
                            isLoading: false,
                            definition: response.data
                        });
                        console.log(response);
                    }, 1000); 
            });
    }
}

export default DefinitionByBirthdate;