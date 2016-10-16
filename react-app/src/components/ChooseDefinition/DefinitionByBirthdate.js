import React from 'react';
import DefinitionsService from '../../services/DefinitionsService';

class DefinitionByBirthdate extends React.Component {
    constructor() {
        super();
        this.definitionsService = new DefinitionsService();
        this.state = {
            isLoading: false,
            definition: null
        };
    }
    render() {
        return (
            <div>
                "Here be form for birthdate check"
                
            </div>
        );
    }

    componentDidMount() {
        var definition = this.definitionsService.getDefinitionByBirthdate(new Date("1/1/2015"));
    }
}

export default DefinitionByBirthdate;