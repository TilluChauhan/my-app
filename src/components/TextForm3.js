import React,{useState} from 'react'

export default function TextForm3(props) {
    const handleOnUpper=()=>{
        console.log('Upper Click Work');
       // setText('Updated Text');
         let uppertext=text.toUpperCase();
         setText(uppertext);
    }
        const handleOnLower=()=>{
        //setText('LowerText');
        let Lowertext=text.toLowerCase();
        setText(Lowertext);
    }
    const handleOnClear=()=>{
        setText('');
    }
    const handleOnCapital=()=>{
        let captext=text.replace(/\b\w/g,(char)=>char.toUpperCase());
        setText(captext);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
      //  console.log('df');
    }


    const [text,setText]=useState('Enter your text here...');
  return (
    <div>
        <div className="container">
            <div className="form-group">
    <h2>{props.heading}-{text}</h2>
  <textarea className="form-control" id="exampleMessage"  rows="4" onChange={handleOnChange} value={text} placeholder={text}></textarea>
    <button className="btn btn-primary mt-3 " onClick={handleOnUpper}>Convert Into Upper Case</button>
    <button className="btn btn-primary mt-3 ml-3" onClick={handleOnLower}>Convert Into Lower Case</button>
    <button className="btn btn-primary mt-3 ml-3" onClick={handleOnClear}>Clear</button>
        <button className="btn btn-primary mt-3 ml-3" onClick={handleOnCapital}>Capitalize</button>

</div>
        </div>
    </div>
  )
}
