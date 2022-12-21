import React from 'react'

function Alert(props) {
  return (
    <div>
        {props.error && <div className="alert alert-danger text-white fs-4 py-2 text-center">{props.error}</div> }
    </div>
  )
}

export default Alert
