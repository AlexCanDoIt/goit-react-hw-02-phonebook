import styles from './ContactFilter.module.css'

const ContactFilter = ({ value, onChange }) => (
  <label className={styles.text}>
    Find contacts by name
    <input className={styles.input} type="text" value={value} onChange={onChange} />
  </label>
);

export default ContactFilter;