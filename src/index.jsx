import './index.css';

import App from '@app/components/App/';
import React from 'react';
import ReactDOM from 'react-dom';
// import whyDidYouRender from '@welldone-software/why-did-you-render';

// if (import.meta.env.NODE_ENV === 'development') {
//   whyDidYouRender(React, {
//     onlyLogs: true,
//     include: [/^BaseWrapper/]
//   });
// }

ReactDOM.render(<App />, document.getElementById('root'));

