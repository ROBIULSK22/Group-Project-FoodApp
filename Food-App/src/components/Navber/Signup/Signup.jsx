import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
class Signup extends Component {
  render() {
    return (
      <div className={styles.mainbody}>
        <div className={styles.wrapper}>
          <form action="">
            <h1>Sign-Up</h1>
            <div className={styles["input-box"]}>
              <input type="text" placeholder="Enter your email" required />
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className={styles["input-box"]}>
              <input
                type="text"
                placeholder="Enter your Phone Number"
                required
              />
              <i class="fa-solid fa-phone"></i>
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
                Sign Up
              </button>
            </div>
            <div className={styles.reg}>
              <center>
                <p>
                <span className={styles["or-text"]}>or</span>{" "}  {/* Wrapped 'or' in a span with class 'or-text' */}
                  <Link to="/Login" className={styles["create_ac"]}>
                    log in to your account
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

export default Signup;
