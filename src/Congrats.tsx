import React from 'react';

interface Props {
  success?: boolean;
}

const Congrats: React.FC<Props> = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return (
      <div
        data-test="component-congrats"
      />
    )
  }
};

export default Congrats;