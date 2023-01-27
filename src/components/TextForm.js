import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText); //setText is used for changing the value of text to newText. We cannot directly assign the value of text, we have to use a function here the function is setText.
    props.showAlert("Converted to upper case!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText); //setText is used for changing the value of text to newText. We cannot directly assign the value of text, we have to use a function here the function is setText.
    props.showAlert("Converted to Lower case!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Cleared!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 className="my-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="10" placeholder="Enter text here" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#042743', color: props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2 className="my-3">Your text Summary</h2>
      <p><b>{text.trim().split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters.</p>
    </div>
    </>
  );
}
