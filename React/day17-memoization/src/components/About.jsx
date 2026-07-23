import React from 'react'

const About = ({ greet }) => {
  greet()
  console.log("About rendering..")
  return (
    <div>About</div>
  )
}

export default React.memo(About);