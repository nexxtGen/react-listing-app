import React from 'react';
import ReactDOM from 'react-dom';
import events from './data/events.json'; //dzięki webpackowi mozemy zaimportować tablicę w pliku json

// przetwarzam obiekty z tablicy- Moje rozwiązanie
const elements = (
    <ul>
        {events.map(item => {
            return (
                    <li key={item.id}>
                      <p>name: {item.name}</p> 
                      <p>place: {item.place}</p> 
                      <p>date: {item.date}</p>
                      <p>time: {item.time}</p>      
                   </li>
            )}
        )}
    </ul>
);
ReactDOM.render(elements, document.getElementById('root'));


//LUB rozwiązanie z kursu

ReactDOM.render(<ul>
    {events.map(item => {
        return (
            <li key={item.id}>
                <strong>{item.name}</strong> <br/>
                Gdzie: {item.place}<br/>
                Kiedy: {item.date} - {item.time}
            </li>
        );
    })}
</ul>, document.getElementById('rootTest'));

