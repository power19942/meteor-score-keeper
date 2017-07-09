import React from 'react';
import {Players} from '../api/players';

class AddPlayer extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
    e.preventDefault();
    let name = e.target.name.value;
    if  (name){
        e.target.name.value = '';
        Players.insert({
            name:name,
            score:this.props.score
        })
    }
    };
    render(){
        return(
           <div className="item">
               <form onSubmit={this.handleSubmit}>
                   <input name="name" type="text" />
                   <button type="submit">Save</button>
               </form>
           </div>
        )
    }
}
export default AddPlayer ;