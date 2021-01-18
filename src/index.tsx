import './index.css';

import App from '@app/components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import whyDidYouRender from '@welldone-software/why-did-you-render';

import * as serviceWorker from './serviceWorker';

if (import.meta.env.NODE_ENV === 'development') {
  whyDidYouRender(React, {
    onlyLogs: true,
    include: [/^BaseWrapper/]
  });
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
