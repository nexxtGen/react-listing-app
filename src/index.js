import React from 'react';
import ReactDOM from 'react-dom';
import events from './data/events.json'; //dzięki webpackowi mozemy zaimportować tablicę w pliku json

//LUB rozwiązanie z kursu
const getEvents = () => {
    return (
        <ul>
            {events.map(item => {
                const date = new Date(item.date); //parsowanie stringa w tablicy na datę i przypisanie do zmiennej date.
                if (date <= Date.now()) {
                    return (
                        <li key={item.id}>
                            <strong>{item.name}</strong> <br/>
                            Gdzie: {item.place}<br/>
                            Kiedy: {item.date} - {item.time}
                        </li>
                    );
                }
                return null;
            })}
        </ul> 
    )
}

ReactDOM.render(getEvents(), document.getElementById('root'));






