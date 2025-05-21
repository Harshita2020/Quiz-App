import React from 'react'

const Questions = ({text, selected, setSelected, correct, options, baseStyle}) => {
    console.log("text", text)
    console.log("correct", correct)
    console.log("options", options)
    // console.log("text", text)
    // console.log("text", text)
    // console.log("text", text)
  return (
    <div  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",      // horizontal centering
    justifyContent: "center",  // vertical centering
    height: "100vh",           // take full height of screen>
    }}>
    <h3>{text}</h3>
    <div>
      {options.map((label) => (
        <div
          key={label}                 // good, unique per option
          onClick={() => setSelected(label)}   // we *know* what was clicked
          style={{
            ...baseStyle,
            backgroundColor: selected === label ? selected === correct ? "green" : "red" : "wheat"
          }}
        >
          {label}
        </div>
      ))}
    </div>
    </div>     
  )
}

export default Questions