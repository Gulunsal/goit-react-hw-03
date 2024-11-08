import React from 'react';
import styles from './ContactItem.module.css';

function ContactItem({ contact, onDeleteContact }) {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>👤</span>
      <span>{contact.name}</span>
      <span className={styles.icon}>📞</span>
      <span>{contact.number}</span>
      <button onClick={() => onDeleteContact(contact.id)} className={styles.button}>
        Delete
      </button>
    </li>
  );
}

export default ContactItem;
