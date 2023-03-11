import React, {useState}  from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("uppercase was clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    
    setText(event.target.value)
  }

  const [text, setText] = useState('');
    return (
        <>
    <div>
      
<div className="mb-3 container">
  <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary"onClick={handleUpClick}>Converter to Upper case</button>
    </div>
    <div className=" container my-3" >
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008*text.split(" ").length} Min need to read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
