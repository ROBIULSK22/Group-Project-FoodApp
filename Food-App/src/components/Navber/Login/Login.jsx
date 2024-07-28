import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

class Login extends Component {
  render() {
    return (
      <div className={styles.loginpagebg}>
        <div className={styles.wrapper}>
          <form action="">
            <h1>Login</h1>
            
            <div className={styles["input-box"]}>
              <input type="text" placeholder="Enter your email" required />
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className={styles["input-box"]}>
              <input
                type="password"
                placeholder="Enter your Password"
                required
              />
              <i className="fa-solid fa-lock"></i>
            </div>
            <div className={styles["rember-forgot"]}>
              <button type="submit" className={styles.btn}>
                Login
              </button>
            </div>
            <div className={styles.reg}>
              <center>
                <p>
                  or{" "}
                  <Link to="/signup" className={styles["create_ac"]}>
                    create an account
                  </Link>
                </p>
              </center>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
