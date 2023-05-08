import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
  text,
  backgroundColor = 'transparent',
  textColor = 'black',
  onClick,
}) => {
  return (
      <button onClick={onClick} style={{ backgroundColor, color: textColor }}>
        {text}
      </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  text: 'Button',
  textColor: 'black',
  onClick: undefined,
};
