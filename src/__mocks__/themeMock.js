import React from 'react';

const ThemeMock = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export default ThemeMock;