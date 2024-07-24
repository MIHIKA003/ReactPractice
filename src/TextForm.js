import React, { useState } from 'react';

export default function TextForm(props) {
    
    const handleUpClick = () => {
        // console.log("UpperCase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=> {
        //console.log("On Change")
        setText(event.target.value)
    }

    const handleDownClick = () => {
        let lowText = text.toLowerCase();
        setText(lowText);
    }

    const handleClearClick = () => {
        let clearText = "";
        setText(clearText);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const [text, setText] = useState("");


    return(
        <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h3>{props.heading}</h3>
        <div className="form-floating">
        <textarea className="form-control text-{props.mode}" value={text} id="myBox" onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode === 'dark' ? 'midnightblue' : 'white', color: props.mode==='dark'? 'white':'black'}}></textarea>
        </div>
        <button disabled={text.length === 0} className='btn btn-primary my-2 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length === 0} className='btn btn-primary my-2 ms-3' onClick={handleDownClick}>Convert to LowerCase</button>
        <button disabled={text.length === 0} className='btn btn-primary my-2 ms-3' onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className='btn btn-primary my-2 ms-3' onClick={speak}>Speak</button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element) => {return element.length!=0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h4 className='my-4'>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    );
}