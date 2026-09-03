import React,{useState} from 'react'

export default function TextForm2(props) {
    
    const handleOnClick=()=>{
        console.log('Click function Work');
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Convert Into Upper Case',"success");

    }
    const handleOnLower=()=>{
        console.log('Lower Case ');
        let lowtext=text.toLowerCase();
        setText(lowtext);
         props.showAlert('Convert Into Lower Case','success');
    }
    const handleOnCapital=()=>{
        console.log('Capital');
        let captxt=text.replace(/\b\w/g,(char)=>char.toUpperCase());
       // let Captext=text.replace(/\b  \w/g,(char)=>char.toUpperCase());
        setText(captxt);
        props.showAlert('Convert Into First Letter  is Capitalize','success');
    }
    const  handleOnCopy=()=>{
        navigator.clipboard.writeText(text);
  alert("Text Copied to Clipboard!");
    }
    const handleOnDownload=()=>{
        console.log('Download')
    }
    const handleOnClear=()=>{
        console.log('clear');
        let cleartext=(" ");
        setText(cleartext);
         props.showAlert('Convert Into clear Text','success');
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
        console.log('OnChange Function is Work');
    }

     const [text,setText]=useState('Please Write A Message')
  return (<>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
         <div className="form-group">
            <h1>{props.heading}</h1>
    <textarea className="form-control" id="exampleTextarea" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='dark'?'white':'black'}}  rows="5" value={text} onChange={handleOnChange} placeholder={text}></textarea>
        <button className="btn btn-primary mt-3" onClick={handleOnClick}>Convert Into Upper Case</button>
        <button className="btn btn-primary mt-3 ml-3" onClick={handleOnLower}>Convert Into Lower Case</button>     
        <button className="btn btn-primary mt-3 ml-3" onClick={handleOnCapital}>Convert Into Capitalize</button>
         <button className="btn btn-primary mt-3 ml-3" onClick={handleOnCopy}>Copy</button>
        <button className="btn btn-primary mt-3 ml-3" onClick={handleOnDownload}>Download</button>
        <button className="btn btn-primary mt-3 ml-3" onClick={handleOnClear} >Clear Text</button>    
      </div>
      
    </div>
    <div className="container">
        <h2>Your Text  Summary</h2>
        <p>{text.split(/\s+/).filter((element) => element.length !== 0).length}word and {text.replace(/\s+/g, "").length} Characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length}Minutes</p>
        <p>{text}</p>
      </div>
    </>
  
  )
}
