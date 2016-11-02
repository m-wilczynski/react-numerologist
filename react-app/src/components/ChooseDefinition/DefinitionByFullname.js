import React from 'react';
import DefinitionsService from '../../services/DefinitionsService';
import NumberDefinition from '../Definition/NumberDefinition';
import CommonValidator from '../../common/CommonValidator';

class DefinitionByFullname extends React.Component {

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
                        <input className="fullname-input" type="text" name="fullname" placeholder="Your full name..."/>
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
        var fullName = this.handleFormInput(event.target);
        this.setState({isLoading: true});
        var component = this;
        this.definitionsService.getDefinitionByFullname(fullName, 
            function(response) {
                component.setState({ 
                    isLoading: false,
                    definition: response.data
                }); 
            });
    }

    handleFormInput(form) {
        return form.fullname.value;
    }
}

export default DefinitionByFullname;