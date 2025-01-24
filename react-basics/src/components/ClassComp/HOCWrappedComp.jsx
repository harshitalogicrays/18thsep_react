import React, { Component } from 'react'

export default class HOCWrappedComp extends Component {
  render() {
    return (
      <div> <h1>{this.props.title}</h1>
        <div  class="table-responsive" >
            <table class="table table-bordered table-striped table-hover" >
                <thead>  <tr>
                        <th>Sr. No</th>
                        {this.props.columns.map((col,i)=><th key={i}>{col}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.length==0 && <tr><td colSpan={this.props.columns.length}>No Data Found</td></tr>}
                    {this.props.data.map((d,i)=>
                    <tr key={i}>
                        <td>{i+1}</td>
                        {this.props.columns.map((col,i)=>
                        // <td key={i}> {d[col]} </td>

                            <td key={i}>
                            {col=="image" ? <img src={d[col]} width="50px" height="50px"/> :
                            <>
                                {col=="description" ?
                                <>
                                    {d[col].slice(0,21)}...</>
                                :
                                d[col]
                                }
                            </>
                            }
                            </td>)}
                    </tr>)}
                </tbody>
            </table>
        </div>
        
      </div>
    )
  }
}
