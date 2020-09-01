import React, { useState } from 'react';
import PropTypes from 'prop-types';

interface Props {
  secretWord: string
}

const Input: React.FC<Props> = ({ secretWord }) => {
  const [ currentGuess, setCurrentGuess ] = useState('');
  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value) }
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess('')
          }}
          data-test="submit-button"
          className="btn btn-primary mb-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
};

export default Input;