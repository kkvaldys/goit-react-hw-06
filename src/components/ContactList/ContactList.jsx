import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { getVisibleContacts } from "../../helpers/getVisibleContacts";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
