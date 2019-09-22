import React from "react";

class SearchBar extends React.Component {
    
    state = { term: "" };
    
    onFormSubmit = (event) => {

        // this prevents refreshing of webpage after submitting user's input.
        event.preventDefault();

        this.props.passingFromChildToParent(this.state.term);
        //this.props.onSubmit(this.state.term);
    };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
        //console.log(this.state.term);
    };

    componentDidMount() {
        //console.log(this.state.term);
    }

    componentDidUpdate() {
        //console.log(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search: </label>
                        {/* By the props, value, input is locked, which is initialized 
                            by 'state' and cannot be changed by user's input.
                            This can be unlocked by the props, 'onChange' handler. 
                            The name of onChange() cannot be changed, since it is special
                            handler name. 
                            Whenever input is changed, onInputChange() will be called
                            thru event handler, 'onChange' */}
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange = { this.onInputChange }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
