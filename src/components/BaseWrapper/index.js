import React from 'react';

import { StyledBaseInner, StyledBaseRoot } from './styles';

function BaseWrapper({children}) {
 
  return (
    <StyledBaseRoot>
      <StyledBaseInner>{children}</StyledBaseInner>
    </StyledBaseRoot>
  )

}

BaseWrapper.displayName = "BaseWrapper";

export default BaseWrapper;