import { useState } from 'react';
import styles from '../../styles/EmailModal.module.scss'
import { BsBellFill } from "react-icons/bs";

const EmailModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  }

  return (
    <>
     {!showModal && ( <h3 className={`${styles.open} ${styles.pulse}`} onClick={() => setShowModal(true)}><BsBellFill className={styles.bell} /> Håll dig uppdaterad!</h3>
      )}
      {showModal && (
        <div className={styles.modal}>
          <div className="modal-content">
            <h1>Prenumerera på vårat nyhetsbrev!</h1>
            <p className={styles.paragraph}>
                Håll dig uppdaterad om det enkla livet i Skellefteå! Fyll i fälten nedan och anmäl ditt intresse så kommer vi skicka ut inspiration,
                 tips, läsvärda artiklar och annat smått och gott. I lagom dos såklart!</p>
            <form className={styles.form} onSubmit={handleSubmit}> 
            <label className={styles.label} htmlFor="email">E-post:</label>
              <input className={styles.input}
            type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className={styles.label} htmlFor="firstName">Förnamn:</label>
              <input className={styles.input} type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <button className={`${styles.btn} ${styles.pulse}`} type="submit">Submit</button>
            </form>
          </div>
          <h4 className={styles.close} onClick={() => setShowModal(false)}>⊗</h4>
        </div>
      )}
    </>
  );
};

export default EmailModal;