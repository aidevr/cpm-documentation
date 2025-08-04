import React from 'react';

const HeadingMock = ({ as: Component = 'h1', children, ...props }) => (
  <Component {...props}>{children}</Component>
);

export default HeadingMock;