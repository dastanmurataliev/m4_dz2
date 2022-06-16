import React from "react";

function UsersList (props) {
  
  return(
    <div>
    <ul>
      {
        props.usersProps.map((user) => {
          return(
            <li>{user}</li>
          )
        })
      }
    </ul>
    ----------------
    <ul>
      <li>name: {props.user.name}</li>
      <li>age: {props.user.age}</li>
      <li>position: {props.user.position}</li>
    </ul>
    </div>
    

  )
}

export default UsersList;