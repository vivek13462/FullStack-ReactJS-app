import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Data from './testData';

ReactDOM.render (
<App contests={Data.contests} />,
    document.getElementById('root')
);