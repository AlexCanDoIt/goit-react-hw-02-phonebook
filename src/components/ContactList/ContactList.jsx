import styles from './ContactList.module.css'

const ContactList = ({contacts, onDeleteContact}) => (
  <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.item}>
        <span className={styles.text}>{name}: {number}</span>
        <button className={styles.button} type="button" onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
)

export default ContactList;