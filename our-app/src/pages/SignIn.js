import classes from "../cssModules/SignIn.module.css";

function SignIn() {
  return (
    <div className={classes.main}>
      <h2 className={classes.signInTitle}>Sign In</h2>
      <form>
        <label for="username">Username:</label>
        <input type="text" name="username"></input>
        <br></br>
        <label for="pass">Password:</label>
        <input type="password" name="pass"></input>
        <br></br>
        <button type="submit" formaction="">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
