import React from 'react';

import PropTypes, { number } from 'prop-types';


function Button ({className, onClick, text}) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}


Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  onClick: null,
  text: '',
};

export default Button;
