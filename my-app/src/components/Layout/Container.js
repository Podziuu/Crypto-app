import React from 'react'

const Container = (props) => {
  return (
    <div className="p-5 sm:p-0 sm:ml-60">{props.children}</div>
  )
}

export default Container