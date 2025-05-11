
import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"
import {  selectError, selectFilteredContacts } from "../../redux/contacts/selectors";


export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts); 
  const error = useSelector(selectError);

  return (
      <div>
          <ul className={s.list}>
              {contacts.map(({ id, name, number }) => (
                 <Contact key={id} id={id}name={name} number={number}/>
              ))}
          </ul>
{error && <h2>Server is dead...</h2>}
    </div>
  )
}

export default ContactList;