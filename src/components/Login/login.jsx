import React from 'react'
import styles from './login.module.css';
import profile from "./image/a.svg";
import email from "./image/email.jpg";
import pass from "./image/pass.png";
function Login() {
  return (
    <div className={styles.main}>
     <div className={styles.submain}>
       <div>
         <div className={styles.imgs}>
           <div className="containerimage">
             <img src={profile} alt="profile" className={styles.profile}/>
           </div>
         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className={styles.email}/>
             <input type="text" placeholder="user name" className={styles.name}/>
           </div>
           <div className={styles.secondinput}>
             <img src={pass} alt="pass" className={styles.email}/>
             <input type="password" placeholder="user password" className={styles.name}/>
           </div>
          <div className={styles.loginbutton}>
          <button>Login</button>
          </div>
           
            <p className={styles.link}>
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;