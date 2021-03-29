import React from 'react'

const EmailItem = ({sender,subject,date,id}) => {
  return (
    <div>
      <label>Date: </label>
      <h1>{date}</h1> <br/>
      <label>FROM: </label>
      <h2>{sender}</h2> <br/>
      <label>SUBJECT: </label>
      <h3>{subject}</h3>
    </div>
  )
}

export default EmailItem

