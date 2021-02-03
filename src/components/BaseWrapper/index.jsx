import React from 'react';

import { StyledBaseInner, StyledBaseWrapper } from './styles';

function BaseWrapper({children}) {
 
  return (
    <StyledBaseWrapper>
      <StyledBaseInner>{children}</StyledBaseInner>
    </StyledBaseWrapper>
  )

}

BaseWrapper.displayName = "BaseWrapper";

export default BaseWrapper;