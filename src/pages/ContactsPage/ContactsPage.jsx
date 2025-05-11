import React, { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from '../../redux/contacts/operations';
import s from './ContactsPage.module.css';

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <div className={s.sections}>
        <div className={s.left}>
          <ContactForm />
           
        </div>
        <div className={s.right}>
         <SearchBox />
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
