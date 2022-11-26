import React from "react";
import classes from "./Persons.module.css";

const Persons = (props) => {
  return <div className={classes.persons}>{props.persons}</div>;
};

export default Persons;
