import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- Css Modules -</p>
      <button className={classes.button}>Fight!</button>
    </div>
  );
};
