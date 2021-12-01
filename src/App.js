import { useState } from "react";

import "./App.css";

import Contacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(Contacts.slice(0, 5));
  const randomContacts = Contacts.slice(5)

  const getRandomContact = ()=>{
    const newRandom = Math.floor(Math.random() * (randomContacts.length))
    const randomContact = randomContacts.splice(newRandom, 1)[0]
    setContacts([...contacts, randomContact])
  }


  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div>
        <button onClick={() => getRandomContact()}> Add Random Contact </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        {contacts.map((contact, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>
                  <img
                    className="table-picture"
                    src={contact.pictureUrl}
                    alt={contact.name}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                {contact.wonOscar ? <td>🏆</td> : <td></td>}
                {contact.wonEmmy ? <td>🏆</td> : <td></td>}
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
