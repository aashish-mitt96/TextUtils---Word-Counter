import React, { useState } from "react";

export default function Textarea(props) {

  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleUp = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }
  const handleDown = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }
  const handleClear = ()=> {
    setText("");
    props.showAlert("Content Cleared", "success");
  }
  const handleCopy = ()=> {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
  }
  const handleSpaces = ()=> {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
    props.showAlert("Extra Spaces Removed", "success");
  }
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  const charCount = text.length;
  const readingSpeed = 150;
  const minutesRead = (wordCount / readingSpeed).toFixed(2);

  return (
    <>
      <div className="form-group container">
        
        <h1 style={{color: props.mode === 'Light'? 'Black':"White"}}>Enter the text to analyze below</h1>
        
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleChange}
          style={{color: props.mode==='Light'?'black':'white',backgroundColor: props.mode === 'Light'? 'White':'#98AFC7'}}
        ></textarea>

        <div className="containers my-2 mb-2">
          <button type="button" onClick={handleUp} className={`btn mx-1`} style={{color: 'white',backgroundColor: props.mode === 'Light'? '#343a40':'#002244'}}>Upper case</button>
          <button type="button" onClick={handleDown} className={`btn mx-1`} style={{color: 'white',backgroundColor: props.mode === 'Light'? '#343a40':'#002244'}}>Lower case</button>
          <button type="button" onClick={handleClear} className={`btn mx-1`} style={{color: 'white',backgroundColor: props.mode === 'Light'? '#343a40':'#002244'}}>Clear Area</button>
          <button type="button" onClick={handleCopy} className={`btn mx-1`} style={{color: 'white',backgroundColor: props.mode === 'Light'? '#343a40':'#002244'}}>Copy Text</button>
          <button type="button" onClick={handleSpaces} className={`btn mx-1`} style={{color: 'white',backgroundColor: props.mode === 'Light'? '#343a40':'#002244'}}>Remove Extra Spaces</button>
        </div>  

        <div>
          <h1 className="my-3" style={{color: props.mode === 'Light'? 'Black':"White"}}>Your text summery</h1>
          <p style={{color: props.mode === 'Light'? 'Black':"White"}}> {wordCount} words and {charCount} characters</p>
          <p style={{color: props.mode === 'Light'? 'Black':"White"}}> {minutesRead} Minutes read</p>
          <h2 style={{color: props.mode === 'Light'? 'Black':"White"}}> Preview</h2> 
          <p style={{color: props.mode === 'Light'? 'Black':"White"}}>{text || "Nothing to Preview"}</p>
        </div>
      </div>
    </>
  );
}
