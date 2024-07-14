import Contact from "./Contact/Contact";
// import s from "./ContactList.module.css";

const ContactList = ({ contact, handleDelete }) => {
  return (
    <>
      <ul>
        {contact.map((contact, index) => {
          return (
            <Contact
              key={index}
              contact={contact}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
