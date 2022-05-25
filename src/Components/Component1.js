import React from 'react';
import axios from 'axios';

class Component1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            starts:1,
            images:'',
        }
    }
    componentDidMount(){
        this.imagedata();
    }

    imagedata=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos/?_start=${this.state.starts}&_limit=5`)
        .then(res=>{
            this.setState({images:res.data});
         })
    }
    previousClick=()=>{
        const indexcheck=this.state.starts-1;
        if(indexcheck<1){
        this.setState({starts:1},this.imagedata)
    }
        else{
        this.setState({starts:indexcheck},this.imagedata)
        }

    }
    nextClick=()=>{
        const nextindexcheck=this.state.starts+1;
        console.log(nextindexcheck);
        this.setState({starts:nextindexcheck},this.imagedata)  
    }
    
    render(){
        return(
            <div>
            <p>Component</p>
            {this.state.images ?

            this.state.images.map((item,i)=>
                <img src={item.url} alt="Could not load" height="200" width="250"/>     
            ):null
            
            }
            <input type="button" onClick={this.previousClick} value="Previous"/>
            <input type="button" onClick={this.nextClick} value="Next"/>
            </div>
        )
    }
}

export default Component1;