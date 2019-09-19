import React, { Component } from 'react';

class AddNoteForm extends Component {

    state = {
        value: ''
    };

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNote(this.state.value);
        this.setState({ value: ''})
    }

    render() {
        return (
            <div id="add-notes">
                <form id="add" onSubmit={ this.handleSubmit }>
                    <input
                        type="text"
                        value={ this.state.value }
                        onChange={ this.handleChange }
                        placeholder="Add a new note here.."
                        id="add-input"
                    />
                    <input type="submit" value="Add Note" id="add-btn" />
                </form>
            </div>
        );
    }
}

export default AddNoteForm;
