// pizzeria/pizzaform.js
import React, { Component } from "react";
import axios from "axios";

class MemberForm extends Component{
    constructor(props){
        super(props);
        this.state = {
          member_name:"",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event){
this.setState({[event.target.name]:event.target.value});
}

handleSubmit(event){
  event.preventDefault();
  console.log(this.state.member_name);
  axios.post("http://127.0.0.1:8000/create/",{
         name: this.state.member_name,
         surname:this.state.surname,
         age:this.state.age,
         position:this.state.position,
         address:this.state.address})
        .then((response) => {
          console.log(response)})
        .catch((error) => {
          console.log(error)});
}

render(){
  const { member_name,
          surname, 
          age, 
          position,
          address } = this.state;
  return( 
    <form class="form" 
          onSubmit={this.handleSubmit}>
    <legend>Member's Fill-up Form</legend>
    <fieldset class="form-group">
      <div>
      <label class="form-label mt-4">Member's name</label>
       <input 
          class="form-control form-control-lg"
          type="text" 
          name="member_name" 
          value={member_name}
          placeholder="Enter name"
          onChange={this.handleChange}/>
      </div>
      <div>
      <label class="form-label mt-4">Member's surname</label>
       <input 
          class="form-control form-control-lg"
          type="text" 
          name="surname" 
          value={surname}
          placeholder="Enter surname"
          onChange={this.handleChange}/>
      </div>
      <div>
      <label class="form-label mt-4">Member's age</label>
       <input 
          class="form-control form-control-lg"
          type="text" 
          name="age" 
          value={age}
          placeholder="Enter age"
          onChange={this.handleChange}/>
      </div>
      <div>
      <label class="form-label mt-4">Position in the church</label>
       <input 
          class="form-control form-control-lg"
          type="text" 
          name="position" 
          value={position}
          placeholder="Enter position"
          onChange={this.handleChange}/>
      </div>
      <div>
      <label class="form-label mt-4">Local address</label>
       <input 
          class="form-control form-control-lg"
          type="text" 
          name="address" 
          value={address}
          placeholder="Enter address"
          onChange={this.handleChange}/>
      </div>
      <input class="btn btn-lg btn-success btn-block" 
             type="submit" 
             value="Submit"/>
    </fieldset>
    </form>
  );
 }
}
export default MemberForm;
