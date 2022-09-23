import React, { StrictMode } from 'react';

import ReactDom from "react-dom";
import * as serviceWorker from "./serviceWorker";


import App from './App';

 


ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
document.getElementById('root')
);

serviceWorker.unregister();