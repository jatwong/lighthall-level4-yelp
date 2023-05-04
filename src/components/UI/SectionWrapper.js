import classes from './SectionWrapper.module.css';

const SectionWrapper = (props) => {
  return (
    <div className={classes.page}>
      <div className={classes.title}>
        <h2>{props.title}</h2>
      </div>
      {props.children}
    </div>
  );
};

export default SectionWrapper;
