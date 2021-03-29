import React, { Component } from 'react'
import EmailItem from './EmailItem'


class EmailTree extends React.Component {
  render(){
    console.log(this.props)

    return (
      <div className="emailsContainer">
        {this.props.data.map((email) => (
        <EmailItem id={email.id} date={email.date} recipient={email.sender} subject={email.subject} id={email.id} />))}
  
      </div>
      
    )
  }
  
}

export default EmailTree

