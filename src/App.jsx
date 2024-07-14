import { useState } from "react";
import contacts from "./contact.json";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contact, setContact] = useState(contacts);
  const [filter, setFilter] = useState("");
  const addContact = (newContact) => {
    setContact((prevContact) => {
      return [...prevContact, newContact];
    });
  };
  const handleDelete = (contactId) => {
    setContact((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };
  const searchContact = contact.filter((cont) =>
    cont.name.toLowerCase().includes(filter.toLowerCase())
  );
  const changeFilter = (value) => {
    console.log(value);
    setFilter(value);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox changeFilter={changeFilter} filter={filter} />
      <ContactList handleDelete={handleDelete} contact={searchContact} />
    </div>
  );
}

export default App;
