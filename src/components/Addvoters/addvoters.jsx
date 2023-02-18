import React from "react";
import styles from './addvoters.module.css';

export default function App() {
  return (
    <div className={styles.formcontainer}>
      <form className={styles.registerform}>
        {/* Uncomment the next line to show the success message */}
        {/* <div className="success-message">Success! Thank you for registering</div> */}
        <input
          id="first-name"
          className={styles.formfield}
          type="text"
          placeholder="AdharCard Number"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          id="last-name"
          className={styles.formfield}
          type="text"
          placeholder="Email id"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          id="email"
          className={styles.formfield}
          type="text"
          placeholder="Pool Id"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button className={styles.formfield} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
