import s from "./Contact.module.css";
const Contact = ({ contact, handleDelete }) => {
  const name = contact.name;
  const number = contact.number;
  const id = contact.id;
  return (
    <li className={s.contact}>
      <p className="title">{name}</p>
      <p className="telefon">{number}</p>
      <button type="button" className="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
