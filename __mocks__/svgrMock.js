// https://react-svgr.com/docs/jest/
import React from 'react';

const SvgrMock = React.forwardRef((props, ref) => (
  <span ref={ref} {...props} />
));

export const ReactComponent = SvgrMock;
export default SvgrMock;


