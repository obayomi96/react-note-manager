import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import NoteLists from './components/NoteLists';
import AddNoteForm from './components/AddNoteForm';
import ToggleNotes from './components/ToggleNotes';

import './index.css';

class App extends Component {

  state = {
    notes: [],
    checked: false,
    visible: true,
    // value: '',
    displayEditor: true
  };

  static propTypes = {
    handleAddNote: PropTypes.func,
    handleDeleteNote: PropTypes.func,
    handleNotesDisplay: PropTypes.func
  };

  prevPlayerId = 0;

  handleAddNote = (note) => {
    if (note !== '') {
      this.setState(prevState => {
        localStorage.setItem('note', this.state.value)
        return {
          notes: [
            ...prevState.notes,
            {
              note,
              id: this.prevPlayerId += 1
            }
          ]
        }
      });
    }
  }

  handleDeleteNote = (id) => {
    this.setState(prevState => {
      localStorage.removeItem('note')
      return {
        notes: prevState.notes.filter((n) => n.id !== id)
      };
    });
  }

  handleNotesDisplay = () => {
    if (this.state.notes.length > 0) {
      this.setState(prevState => {
        localStorage.getItem('note')
        return {
          checked: !prevState.checked,
          visible: !prevState.visible
        }
      });
    }
  }

  handleEditNote = () => {
    console.log('from the editor')
    this.setState(prevState => {
      return {
        displayEditor: !prevState.displayEditor,
        // value: note.value
      }
    });
  }

  render() {

    const changeText = this.state.checked ? 'Show notes' : 'Hide notes';
    const hideUnhide = this.state.visible ? 'block' : 'none';
    const noteEditor = this.state.displayEditor ? 'none' : 'block';

    return (
      <div className="wrapper">
        <Header />
        {this.state.notes.map((n, index) =>
          <NoteLists
            note={n.note}
            id={n.id}
            key={n.id.toString()}
            index={index}
            deleteNote={this.handleDeleteNote}
            hideUnhide={hideUnhide}
            editNote={this.handleEditNote}
            // updatedValue={this.handleUpdatedValue}
            noteEditor={noteEditor}
          />
        )}
        <ToggleNotes
          noteDisplay={this.handleNotesDisplay}
          changeText={changeText}
        />
        <AddNoteForm addNote={this.handleAddNote} />
      </div>
    );
  }
}

export default App;
