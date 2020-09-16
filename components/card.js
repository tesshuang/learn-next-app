import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ src, alt, category, title, description }) => (
  <div className="md:flex">
    <div className="md:flex-shrink-0">
      <img
        className="rounded-lg md:w-56"
        src={src}
        width="448"
        height="299"
        alt={alt}
      />
    </div>
    <div className="mt-4 md:mt-0 md:ml-6 md:flex md:flex-col md:justify-center">
      <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
        {category}
      </div>
      <a
        href="#"
        className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
      >
        {title}
      </a>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </div>
);

Card.PropTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  category: PropTypes.oneOf(['HTML', 'CSS', 'JavaScript']),
  title: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  src: '',
  alt: 'Mock image placeholder',
  category: 'JavaScript',
  title: 'A title',
  description: 'A description',
};
