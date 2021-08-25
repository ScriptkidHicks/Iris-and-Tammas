import classes from "../cssModules/CreateProfile.module.css";

function CreateProfile() {
  return (
    <div className={classes.main}>
      <h2 className={classes.title}>Create a Profile</h2>
      <form
        className={classes.contentForm}
        onSubmit={(event) => {
          event.preventDefault();
          const [{ value: name }, { value: email }, { value: password }] =
            event.target;
          console.log(name, email, password);

          fetch("/auth/users", {
            credentials: "include",
            mode: "cors",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          });
        }}
      >
        <div>
          <label to="personName" className={classes.labels}>
            Your Name
          </label>
          <br></br>
          <input type="text" className={classes.inputs}></input>
          <br />
          <label to="email" className={classes.labels}>
            Your Email
          </label>
          <br />
          <input type="email" id="email" className={classes.inputs}></input>
          <br />
          <label className={classes.labels}>Password</label>
          <br />
          <input type="password" className={classes.inputs}></input>
          <br />
          <label className={classes.labels}>Password (repeat)</label>
          <br />
          <input type="password" className={classes.inputs}></input>
          <br></br>
          <button type="submit" className={classes.btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProfile;
