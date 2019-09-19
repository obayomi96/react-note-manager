import React, { Component } from 'react';

class SearchForm extends Component {

    state = {
        value: ''
    };

    render() {
        return (
            <form id="search-note">
                <input type="text" placeholder="Search note..." />
            </form>
        );
    }
}

export default SearchForm;
