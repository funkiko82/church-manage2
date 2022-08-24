// church/churchdetail.js
import React, { Component } from 'react';
import MemberUpdate from "./memberupdate.js";
import axios from "axios";

class MemberDetail extends Component{
    constructor(props){
    super(props);
    this.state = {
      showComponent: false,
   };
    this.updateMemberDetails = this.updateMemberDetails.bind(this);
    this.deleteMember= this.deleteMember.bind(this);
}
    updateMemberDetails(){
        this.setState({ showComponent: true});
}
    deleteMember(obj){
        console.log(obj);
        axios.delete("http://127.0.0.1:8000".concat(obj))
             .then((response) =>{
                 console.log(response);
               })
             .catch(function(error){
                 console.log(error)
               });
 }

    render(){
      const obj = this.props.memberDetail;
        return(<div class="card mb-3">
                 <h3 class="card-header text-secondary">Saved by Grace Member Details</h3>
               <div class="card-body">
                 <h4 class="h4 text-info">{obj.name} {obj.surname} <h6 class="text-muted">name</h6> </h4>
                 <h4 class="text-info"> { obj.position }<h6 class="text-muted">position</h6> </h4>
                 <h4 class="text-info"> { obj.age }<h6 class="text-muted">age</h6></h4>
                 <h4 class="text-info"> { obj.address }<h6 class="text-muted">address</h6></h4>
                 <button class="btn btn-lg btn-success btn-block" 
                         onClick={ () => this.updateMemberDetails() }>
                         Update
                 </button>
                   
                   { this.state.showComponent ? <MemberUpdate memberUpdate={obj} /> : null }
                 
                 <button class="btn btn-lg btn-warning btn-block" 
                         onClick={ () => this.deleteMember(obj.delete)}>
                         Delete
                  </button>
              </div>
              </div>);
    }
 }
export default MemberDetail;
