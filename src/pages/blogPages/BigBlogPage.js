import React from "react";
import classes from "./blogPage.module.css"

class BigBlogPage extends React.Component {
  render() {
    return <div className={classes.blog}> 
      <p> <li className={classes.text}> CSS это {this.props.text}</li>
          {this.props.number}
      </p> 
    </div>
  }
}


export default BigBlogPage;