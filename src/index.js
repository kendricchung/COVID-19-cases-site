import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';

import App from './App';

ReactDOM.render(
    <div>
        <Favicon url="http://oflisback.github.io/react-favicon/public/img/github.ico" />
        <App/>
    </div>,
document.getElementById('root'));