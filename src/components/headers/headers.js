import React from 'react';
import classes from "./headers.module.css"
function Headers() {
  return (
    <div>
      <ul>
        <li className={classes.names}>NAME</li>
        <li className={classes.names}>NUMBER</li>
        <li className={classes.names}>LOGIN</li>
      </ul>
    </div>
  );
}

export default Headers;
