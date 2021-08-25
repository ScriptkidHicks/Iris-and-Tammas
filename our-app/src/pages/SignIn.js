import classes from "../cssModules/SignIn.module.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className={classes.main}>
      <h2 className={classes.signInTitle}>Sign In</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const [{ value: email }, { value: password }] = event.target;

          console.log(event.target);

          fetch("/auth/user", {
            credentials: "include",
            mode: "cors",
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email,
              password,
              action: "login",
            }),
          });
        }}
      >
        <div className={classes.inputsDiv}>
          <label htmlFor="email" className={classes.inputLabel}>
            Email:
          </label>
          <input type="email" name="email" className={classes.inputBox}></input>
          <br></br>
          <label htmlFor="pass" className={classes.inputLabel}>
            Password:
          </label>
          <input
            type="password"
            name="pass"
            className={classes.inputBox}
          ></input>
        </div>
        <div className={classes.subButtonHolder}>
          <button type="submit" formAction="" className={classes.btn}>
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
