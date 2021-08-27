import PropTypes from "prop-types";
import Contact from "../Contact/Contact";
import s from "./ContactsList.module.css";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <div>
      <ul className={s.list}>
        {contacts.map((item) => (
          <li key={item.id} className={s.item}>
            <Contact name={item.name} number={item.number} />
            <button
              type="button"
              className={s.deleteBtn}
              onClick={() => onDeleteContact(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
