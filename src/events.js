import React from 'react'; //Musze zaimportować react ponieważ używam składni JSX

const getEvents = (events) => {
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
    );
};

export default getEvents;  //Wyeksportowałem funkcję w sposób standardowy czyli bez słowa default.
// Dzięki temu mogę z tego pliku wyeksportować wiecej elementów z modułu.
//Jednak w takim przypadku podczas importu muszę użyc nawiasów {}