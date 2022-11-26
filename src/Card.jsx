import React from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.company}</p>
      <Link to={`/${props.id}`}>More details</Link>
    </div>
  );
};

export default Card;
