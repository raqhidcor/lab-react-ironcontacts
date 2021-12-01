import { useState } from "react";

import "./App.css";

import Contacts from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(Contacts.slice(0, 5));
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {contacts.map((contact) => {
          return (
            <tr>
              <td>
                <img className="table-picture"src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
