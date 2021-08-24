import classes from "../cssModules/MainPage.module.css";

function MainPage() {
  return (
    <div className={classes.main}>
      <div className={classes.declareContainer}>
        <h1 className={classes.declare}>Welcome to Dungeon Bros</h1>
      </div>
      <div className={classes.description}>
        <h2>What are we?</h2>
        <p>
          We are a collective of people who love tabletop roleplaying games. We
          figured our group could use a place to store maps, character sheets,
          and notes. Additionally, we thought it would be useful to have a set
          of tools, like dice rolling, integrated to the site that stored all of
          our information. This site is the result of that work. We hope that
          you enjoy what we have to offer here, and that it makes the running of
          your game easier, so that you can focus on playing the characters you
          dream up.
        </p>
      </div>
    </div>
  );
}

export default MainPage;
