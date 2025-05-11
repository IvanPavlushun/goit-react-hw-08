import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { addContactThunk } from "../../redux/contacts/operations";


export const ContactForm = () => {
  
  const initialValues = {
    name:"",
    number:""
  }

  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

const handleAddContact = data => {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    dispatch(addContactThunk(data));
  };

  const handleSubmit = (values, options) => {
    handleAddContact(values);
    options.resetForm();
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(50, "Максимум 50 символів")
      .required("Обов'язкове поле"),
    number: Yup.string()
      .min(3, "Мінімум 3 символи")
      .max(50, "Максимум 50 символів")
      .required("Обов'язкове поле"),
  });
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form className={s.form}>
          <label className={s.input}>
            Name
            <Field name="name" type="text"></Field>
            <ErrorMessage className={s.error} name="name" component="div"></ErrorMessage>
          </label>
          <label className={s.input}>
            Number
            <Field name="number" type="number"></Field>
            <ErrorMessage className={s.error} name="number" component="div"></ErrorMessage>
          </label>
          <button className={s.button} type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  )
}
export default ContactForm;
