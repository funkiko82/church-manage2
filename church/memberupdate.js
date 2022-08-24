import React, { Component } from 'react';
import axios from 'axios';

class MemberUpdate extends Component{
    constructor(props){
         super(props);
         this.state = {
         obj_to_update: this.props.memberUpdate,
         name: this.props.memberUpdate.name,
         surname: this.props.memberUpdate.surname,
         age: this.props.memberUpdate.age,
         position: this.props.memberUpdate.position,
         address: this.props.memberUpdate.address
                  
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

 }
   handleChange(event){
      this.setState({[event.target.name]:event.target.value});//{value: event.target.value}
      
   }
  handleSubmit(event){ 
      event.preventDefault();
      axios.patch("http://127.0.0.1:8000".concat(this.state.obj_to_update.update),
{ name: this.state.name,
  surname: this.state.surname,
  age: this.state.age,
  position: this.state.position,
  address: this.state.address,})
           .then((response) =>{
            console.log(response);})
           .catch(function(error){
            console.log(error);})

 }
    render(){
     const { name,
             surname,
             age,
             position,
             address } = this.state;
     return( 
     <div >
       <form onSubmit={ this.handleSubmit }>
          <h6>Updating</h6>
          <legend>Update Form</legend>
      <label class="form-label mt-4">Name</label>
          <input 
                class="form-control form-control-lg" 
                type="text" name="name" value={ name } onChange={this.handleChange} />
          <div>
      <label class="form-label mt-4">Member's surname</label>
       <input 
          class="form-control form-control-lg"
          type="text" 
          name="surname" 
          value={surname}
          onChange={this.handleChange}/>
      </div>
      <div>
      <label class="form-label mt-4">Member's age</label>
       <input 
          class="form-control form-control-lg"
          type="text" 
          name="age" 
          value={age}
          onChange={this.handleChange}/>
      </div>
      <div>
      <label class="form-label mt-4">Position in the church</label>
       <input 
          class="form-control form-control-lg"
          type="text" 
          name="position" 
          value={position}
          onChange={this.handleChange}/>
      </div>
      <div>
      <label class="form-label mt-4">Current address</label>
       <input 
          class="form-control form-control-lg"
          type="text" 
          name="address" 
          value={address}
          onChange={this.handleChange}/>
      </div>
       <input class="btn btn-lg btn-primary btn-block" 
              type="submit" 
              value="Submit"/>
       </form>
     </div>)
 }
}

export default MemberUpdate;
