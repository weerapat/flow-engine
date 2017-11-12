import React from 'react';
import ReactDom from 'react-dom'
import FlowEngineApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDom.render(
  <FlowEngineApp />,
  document.getElementById('root')
);
registerServiceWorker();
