import { Component } from "react";
import "./todo.css"

class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      list:[]
    };

}

data=(event)=>{
    this.setState({
        [event.target.name]:event.target.value
    })
}

submit=(event)=>{
    event.preventDefault();
    var obj={
        username:this.state.username,
        password:this.state.password
    }
    this.setState({
        list:[...this.state.list,obj]
    })

}

delete=(ind)=>{
    var updated=this.state.list.filter((val,i)=>{
        return i!==ind
    })
    this.setState({
        list:updated
    })
}

edit=(value,ind)=>{
   var user = prompt("Enter the Username")
   var pass=prompt("Enter the password")
    var updated=this.state.list.map((val,i)=>{
        if(i==ind){
            val.username=user
            val.password=pass
        }
        return val
    });
    this.setState({
        list:updated
    })
}


render(){
    var storeddata=this.state.list.map((val,ind,arr)=>{
        return(
            <>
            <tbody key={ind}>
            <tr key={ind}>
            <td>{val.username}</td>
            <td>{val.password}</td>
            <td>
            <input type="button" value="edit" onClick={()=>this.edit(val,ind)}/>
            <input type="button" value="delete" onClick={()=>this.delete(ind)}/>
            </td>
            </tr>
            </tbody>

            </>
        )
    })

    return(
        <>
        <h1>To DO List</h1>
        <form action="" onSubmit={this.submit}>
            <input type="text" name="username" id="" onChange={this.data}/>
            <input type="text" name="password" id="" onChange={this.data}/>
            <input type="submit" value="submit" />
        </form><br /><br />
        <table>
            {storeddata}
        </table>
        </>
    )
}
}

export default Todolist;
