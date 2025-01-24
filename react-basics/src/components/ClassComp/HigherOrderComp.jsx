import axios from 'axios'
import React from 'react'
import { Component } from 'react'

const HigherOrderComp = (Comp, inputData) => {
  return class extends Component{
    constructor(props) {
        super(props) 
        this.state = { data:[] }
      }
      getData = async()=>{
        try{
            let res = await  axios.get(inputData.url)
            console.log(res.data)
            this.setState({data:res.data})
        }
        catch(err){  console.log(err) }
    }

componentDidMount(){ this.getData()   }

render() {
return (
    <>
        <Comp data={this.state.data} 
              title={inputData.title}  
              columns={inputData.columns}/>
    </>
)
}
  }
}

export default HigherOrderComp
