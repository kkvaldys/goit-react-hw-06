import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.field}>
          <IoPerson size={20} />
          <p>{name}</p>
        </div>
        <div className={css.field}>
          <BsFillTelephoneFill size={20} />
          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.delete_button}
        type="button"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
}

export default Contact;
