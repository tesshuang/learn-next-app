import React from 'react';
import PropTypes from 'prop-types';

export const Heading = ({ type, color, children }) => {
  switch (type) {
    case 'h1':
      return <h1 style={color && { color }}>{children}</h1>;
    case 'h2':
      return <h2 style={color && { color }}>{children}</h2>;
    case 'h3':
      return <h3 style={color && { color }}>{children}</h3>;
    case 'h4':
      return <h4 style={color && { color }}>{children}</h4>;
    default:
      return <h1 style={color && { color }}>{children}</h1>;
  }
};

Heading.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Heading.defaultProps = {
  type: 'h1',
  children: 'This is a H1',
};
