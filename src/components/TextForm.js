import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
      }
      const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
      }
      const handleExtraSpaces = ()=>{
          let newText = text.split(/ +/);
          setText(newText.join(" "))
      }
      const handleCopy=()=>{
        var text = document.getElementById("my-Box");
        text.select();
        navigator.clipboard.writeText(text.value);
      }
      const handleOnChange = (event)=>{
        console.log("text was entered");
        setText(event.target.value)    //This line allows us to change the text inside the text box or allows values to be entered there
      }
      const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#1B4242':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="my-Box" rows="8"></textarea>
      </div>
      <button className="btn btn-outline-success mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-outline-success mx-2" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-outline-success mx-2" onClick={handleCopy}>copy text</button>
      <button className="btn btn-outline-success mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.008*text.split(" ").length} minutes taken to read this.</p>
        <h2>Preview:</h2>
        <p>{text}</p>
           </div>
           </>
  )  
}
