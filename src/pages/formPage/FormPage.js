import React from "react";
import classes from "./formPage.module.css"



class FormPage extends React.Component {

          constructor () {
                    super()
                    this.state = {name: "", lastName:"", age: 0, address: ""}
          }

          handleInput = (e) => {
                    this.setState({
                    ...this.state,
                        [e.target.name]: e.target.value
                    }
                    )
          }

          onSubmit = () => {
                    const data = {
                          name: this.state.name,
                          lastName: this.state.lastName,
                          age: this.state.age,
                          address: this.state.address 
                    }

                    console.log(data)
          }

          render() {
              return (
                    <div className={classes.formInput}>
                      <h1>FormData</h1>
                        <input className={classes.names} placeholder = "Имя" 
                        type="text" 
                        onChange={this.handleInput}
                        name="name"
                        />

                        <input className={classes.names} placeholder = "Фамилия"
                        type="text" 
                        onChange={this.handleInput}
                        name="lastName"
                        />
                        
                        <input className={classes.data} placeholder = "Возраст"
                        type="number" 
                        onChange={this.handleInput}
                        name="age"
                        />

                        <input className={classes.data} placeholder = "Адрес"
                        type="text" 
                        onChange={this.handleInput}
                        name="address"
                        />

                        <button className={classes.btn} onClick={this.onSubmit}>on submit</button>
                    </div>
                )
          }
}

export default FormPage;