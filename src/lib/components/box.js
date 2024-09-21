import React from 'react'
import "./box.css"

const Box = ({ color }) => {
 
  const styles = {
    box: {
        backgroundColor: color ?? "blue"
    }
  };   

  return (
    <div className='box' style={styles.box} />
  )
}

export default Box