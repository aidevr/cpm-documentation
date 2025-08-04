import React from 'react';

const SvgMock = React.forwardRef((props, ref) => (
  <svg ref={ref} {...props} data-testid="svg-mock" />
));

export default SvgMock;