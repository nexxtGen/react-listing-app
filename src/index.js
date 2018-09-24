import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json'; //dzięki webpackowi mozemy zaimportować tablicę w pliku json
import getEvents  from './events';

//LUB rozwiązanie z kursu


ReactDOM.render( getEvents(events), document.getElementById('root'));






