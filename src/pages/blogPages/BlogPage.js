import React from 'react';
import classes from "./blogPage.module.css"


class BlogPage extends React.Component {
  render() {
    return <div> 
    <p className={classes.green}> This person is {this.props.money} sex, thats why we gave him a {this.props.category}</p>
    </div>
  }
}

export default BlogPage;