import React, {useState} from 'react'

export default function TextForm(props) {
    const HandleOnChange=(e)=>{
        setText(e.target.value)
    }
    
    const HandleClickUp=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted in UpperCase","success");
      }
      const HandleClickLo=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted in LowerCase","success");
      }
      
      function firstLetterUpper(theString) {
        var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
        return newString;
      }
      
      function convertToSentenceCase() {
        let newString = firstLetterUpper(text);
        //console.log("Converted: "+newString);
        setText(newString);
        // props.showAlert("Converted in Sentance Case","success");
    }
    const handleCopy=()=>{
      navigator.clipboard.writeText(text);
      alert("Copied" + text);
    }
    const handleClear=()=>{
      setText('');
    }
    const [text, setText] = useState('');
  return (  
    <>
    <div className="container">
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={HandleOnChange} style={{backgroundColor : props.mode==='dark' ? 'gray' : 'white', color : props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={HandleClickUp}>Convert To Uppercase</button>
        <button className="btn btn-secondary my-2 mx-1" onClick={HandleClickLo}>Convert To Lowercase</button>
        <button className="btn btn-primary my-2 mx-1" onClick={convertToSentenceCase}>Convert To SentanceSace</button>
        <button className="btn btn-secondary my-2 mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleClear}>Clear Text</button>
        </div>
    </div>
    <div className="container">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} word and {text.length} Alphabet</p>
      <p>{0.008 * text.split(" ").length} Minutes to Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
