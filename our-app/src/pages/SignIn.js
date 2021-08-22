import classes from "../cssModules/SignIn.module.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className={classes.main}>
      <h2 className={classes.signInTitle}>Sign In</h2>
      <form>
        <div className={classes.inputsDiv}>
          <label for="username" className={classes.inputLabel}>
            Username:
          </label>
          <input
            type="text"
            name="username"
            className={classes.inputBox}
          ></input>
          <br></br>
          <label for="pass" className={classes.inputLabel}>
            Password:
          </label>
          <input
            type="password"
            name="pass"
            className={classes.inputBox}
          ></input>
        </div>
        <div className={classes.subButtonHolder}>
          <button type="submit" formaction="" className={classes.btn}>
            Submit
          </button>
        </div>
      </form>
      <div className={classes.linkContainer}>
        <Link to="/create-profile" className={classes.create_profile}>
          If you need a profile, click here!
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
