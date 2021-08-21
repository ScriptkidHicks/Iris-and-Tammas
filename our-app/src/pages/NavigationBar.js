import { Link } from "react-router-dom";
import classes from "../cssModules/NavigationBar.module.css";

function NavigationBar() {
  return (
    <header className={classes.header}>
      <div>
        <h1 className={classes.title}>Dungeon Bros</h1>
      </div>
      <ul>
        <li>
          <Link to="/" className={classes.link}>
            Main Page
          </Link>
        </li>
        <li>
          <Link to="/sign-in" className={classes.link}>
            Sign In
          </Link>
        </li>
        <li>
          <Link to="/create-profile" className={classes.link}>
            Create Profile
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default NavigationBar;
