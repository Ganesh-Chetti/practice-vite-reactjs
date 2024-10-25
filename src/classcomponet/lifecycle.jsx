
import { Component } from "react";


class Life extends Component{

    constructor(){
        super();
        this.state={
            count:0,
            api:[]
        }
    }

    
    componentDidMount(){
        fetch("https://dummyjson.com/products").then((res)=>{
            return res.json();
        }).then((res)=>{
            console.log(res);
            
            this.setState({
                api:res.products
            })
        })
    }
 
    render(){
        // console.log(this.state);
        
        var aa=this.state.api.map((val,ind)=>{

            return(
                <div key={ind}>
                <h1>{val.id}</h1>
                <h1>{val.title}</h1>
                </div>
            )
        })
        
        return(
            <>
            <h1>this is rendering</h1>
            {aa}
            </>
        )
    }



}
export default Life;