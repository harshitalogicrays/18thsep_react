import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Propsinclass extends Component {
  render() {
    // let {username} = this.props
    return (
      <div>
        <h1>Props Demo</h1>
        {this.props.username}<br/>
        {this.props.isActive ? <>{this.props.username} is Active</> : "User is not active"} <br/>

        {this.props.children[0]}
      </div>
    )
  }
}

Propsinclass.defaultProps = {
  isActive:true
}
Propsinclass.propTypes  = {
  username:PropTypes.string
}