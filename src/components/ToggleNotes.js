import React from 'react';

const ToggleNotes = ({noteDisplay, changeText}) => {
    // const { noteDisplay, changeText } = this.props;
    return (
        <div id="hide-list">
            <label htmlFor="hide">{changeText}</label>
            <input type="checkbox" id="hide" onClick={() => noteDisplay()} />
        </div>
    );
}

export default ToggleNotes;
