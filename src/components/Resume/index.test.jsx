import * as React from 'react';
import { render } from '@testing-library/react';
import Resume from './index';

describe('<Resume>', () => {
  it('renders resume sections', () => {
    const component = render(<Resume />);
    expect(component).toBeDefined()
  });
});
