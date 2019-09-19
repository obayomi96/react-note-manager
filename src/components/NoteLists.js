import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

class NoteLists extends Component {

    static propTypes = {
        note: PropTypes.string,
        id: PropTypes.number,
        index: PropTypes.number,
        deleteNote: PropTypes.func,
        hideUnhide: PropTypes.string
    };

    render() {

        const { note, id, index, deleteNote, hideUnhide, editNote, noteEditor } = this.props;

        const toggleStyle = {
            display: hideUnhide
        };

        return (
            <div className="note-list">
                <ul id="list" style={toggleStyle}>
                    <Note
                        note={note}
                        id={id}
                        index={index}
                        deleteNote={deleteNote}
                        editNote={editNote}
                        // updatedValue={updatedValue}
                        noteEditor={noteEditor}
                    />
                </ul>
            </div>
        );
    }
}

export default NoteLists;
