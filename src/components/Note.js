import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Note extends Component {

    state = {
        value: '',
        // note: ''
    };

    static propTypes = {
        id: PropTypes.number,
        note: PropTypes.string,
        deleteNote: PropTypes.func
    };

    handleUpdatedValue = (e) => {
        this.setState({ value: e.target.value });
        console.log("curreprevStatentValue: ", e.target.value);
    }

    submitEditedNote = (e) => {
        if (e.charCode === 13) {
            this.setState({ value: e.target.value });
        }
    }

    render() {

        const { id, note, deleteNote, editNote, noteEditor } = this.props;

        console.log('note: ', note)

        const editorStyle = {
            display: noteEditor
        };

        return (
            <li>
                <p id="fonts-wrapper" >
                    {note}
                    <span>
                        <i className="fa fa-pencil-square-o" onClick={() => editNote()}></i><i className="fa fa-times" onClick={() => deleteNote(id)}></i>
                    </span>
                </p>
                <input style={editorStyle} className="edit-note" type="text" onChange={this.handleUpdatedValue} onKeyPress={this.submitEditedNote} value={note} />
            </li>
        );
    }
}

export default Note;
