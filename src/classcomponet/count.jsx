import { Component } from "react";




class Classcount extends Component{

    constructor(){
        super();
        this.state={
            count:0
        }
    }

    Inc=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    Dec=()=>{
    
        this.setState({
            count:this.state.count-1
        })
    }

    render(){
        var a=0
        if(this.state.count>=0 && this.state.count<=5){
            a=<h1 style={{color:"green"}}>{this.state.count}</h1>
        }else if(this.state.count>5 && this.state.count<=10){
            a=<h1 style={{color:"red"}}>{this.state.count}</h1>
        }else{
            a=<h1 style={{color:"yellow"}}>{this.state.count}</h1>
        }
        return(
            <>
            <h1>this is rendering</h1>
            <button onClick={this.Inc}>+</button>
            <h1>{a}</h1>
            <button onClick={this.Dec}>-</button>
            </>
        )
    }





}
export default Classcount;