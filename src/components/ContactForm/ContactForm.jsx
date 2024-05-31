import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <div className={css.wrapper}>
            <Field className={css.input} id={nameFieldId} name="name"></Field>
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <div className={css.wrapper}>
            <Field
              className={css.input}
              id={numberFieldId}
              name="number"
            ></Field>
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <button className={css.button} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default ContactForm;
