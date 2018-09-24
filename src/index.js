import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json'; //dzięki webpackowi mozemy zaimportować tablicę w pliku json
import Events  from './events';




ReactDOM.render( <Events eventsPr={events} />, document.getElementById('root')); 
// events={events}  w ten sposób mogę przekazać atrybuty do komponentu






