import React from 'react';
import DefinitionsService from '../../services/DefinitionsService';
import NumberDefinition from '../Definition/NumberDefinition';
import CommonValidator from '../../common/CommonValidator';

class DefinitionByBirthdate extends React.Component {
    constructor() {
        super();
        this.definitionsService = new DefinitionsService();
        this.validator = new CommonValidator();
        this.state = {
            isLoading: false,
            definition: null
        };
    }

    render() {
        return (
            <div>
                { !this.state.isLoading && !this.state.definition ?
                    <form onSubmit={this.requestDefinition.bind(this)}>
                        <input type="text" name="day" placeholder="Day"/>
                        <input type="text" name="month" placeholder="Month" />
                        <input type="text" name="year" placeholder="Year" />
                        <button type="submit"> Submit </button>
                    </form>
                    : "" }
                { this.state.isLoading ? <p>Loading...</p> : ""}
                { this.state.definition != null ?
                    <NumberDefinition data={this.state.definition} /> 
                    : "" }
            </div>
        );
    }

    requestDefinition(event) {

        event.preventDefault();

        //TODO: Handle errors
        var date = this.handleFormInput(event.target);
        this.setState({isLoading: true});
        var component = this;
        this.definitionsService.getDefinitionByBirthdate(date, 
            function(response) {
                component.setState({ 
                    isLoading: false,
                    definition: response.data
                }); 
            });
    }

    handleFormInput(form) {
        return new Date(form.day.value + "/" + form.month.value + "/" + form.year.value);
    }
}

export default DefinitionByBirthdate;