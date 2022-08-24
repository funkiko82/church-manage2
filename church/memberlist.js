// church/memberlist.js
import React from 'react';
import { Component } from 'react';
//import DummyData from './dummydata.json';
import MemberDetail from './memberdetail.js';
import MemberForm from './memberform.js';
import axios from 'axios';

class MemberList extends Component {
      constructor(props){
         super(props);
         this.state = {
            memberData: [], 
            member: " ", 
            showComponent: false,
        };
        this.getMemberDetails = this.getMemberDetails.bind(this);
        this.showMemberDetails = this.showMemberDetails.bind(this);
      }
      
      getMemberDetails(item){
        axios.get("http://127.0.0.1:8000".concat(item.absolute_url))
             .then((response)=>{
                this.setState({member:response.data})
               })
             .catch(function(error){
                console.log(error);});
        }


      showMemberDetails(item){
         this.getMemberDetails(item);
         this.setState({showComponent: true});
        }


      componentDidMount(){
         axios
         .get("http://127.0.0.1:8000/")
         .then((response) => {this.setState({memberData: response.data})})
         .catch(function(error){
            console.log(error)});
}
render(){
  return (<div class='jumbotron text-center'>
             <h1 class="text-success">Members List</h1>
             <h6 class="text-muted">Click name to show details</h6>
          { this.state.memberData.map((item) => { 
             return(<h1 className="h1" 
                        key={item.id} 
                        onClick = {() => this.showMemberDetails(item)}> {item.surname}, {item.name }
                    </h1> );})
         }
            {this.state.showComponent ? (<MemberDetail memberDetail={this.state.member}/>) : null}
             <div> <MemberForm/> </div>
          </div>
         );
     }
}

export default MemberList;
