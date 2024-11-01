import { useState } from "react";

function Todo(){
    var [a,seta]=useState([]);

    function submitting(event){
        event.preventDefault();
         var obj={
            [event.target[0].name]:event.target[0].value,
            [event.target[1].name]:event.target[1].value
         }
        seta(a=[...a,obj]);
        event.target[0].value=""
        event.target[1].value=""
        
    }

    var edit=(value,index)=>{
        var user=prompt("enter the user");
        var pass=prompt("enter the password")
        var ed=a.map((val,ind)=>{
            if(ind==index){
                val.username=user
                val.password=pass
            }
            return val
        })
        
        seta(a=ed)
    }
    
    var del=(value,index)=>{
        var de=a.filter((val,ind)=>{
            return ind!==index
        })
        seta(a=de)
    }

    
    var data=a.map((val,ind)=>{

        return(
        <tr key={ind} >
            <td>{val.username}</td>
            <td>{val.password}</td>
            <td><button onClick={()=>edit(val,ind)}>Edit</button></td>
            <td><button onClick={()=>del(val,ind)}>Delete</button></td>
        </tr>
        )
    })


    return(
        <>
        <h1>To Do list</h1>
        <form action="" onSubmit={submitting}>
           username: <input type="text" name="username" /><br /><br />
            password: <input type="text" name="password" /><br /><br />
            <input type="submit"  value="submit"/>
        </form>
        <table style={{border:"2px solid black", width:"60%"}}>
            {data}
        </table>
        </>
    )
}

export default Todo;