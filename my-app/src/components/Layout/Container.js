import React from 'react'

const Container = (props) => {
  return (
    <div className="p-5 sm:p-0 pt-28 sm:ml-60 sm:pt-0">{props.children}</div>
  )
}

export default Container