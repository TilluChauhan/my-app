import React,{useState} from 'react' // isme usestate hook ko import kia lhikr 
export default function TextForm(props) {
 const handleOnUpClick=()=>{
  console.log('Click Function Work');
   let newText=text.toUpperCase();
  SetText(newText);
 }
 const handleOnUpChange=(event)=>{
  console.log('Helo');
SetText(event.target.value);
 }
   const [text,SetText]=useState('Enter text here'); //setText me update value hogi jo usestate me text jo lhika haib text m a jyga
   // text="sds";// Worng Way
   // SetText('Update text'); correct Way
  return (
    <div className='container'>
     <div className="form-group">
        <h1>{props.heading}- {text}</h1>
 
  <textarea className="form-control" rows="5" id="comment" value={text} onChange={handleOnUpChange}></textarea>
    <button className="btn btn-primary" onClick={handleOnUpClick}>Convert Into Upper Case</button>
   </div>
    </div>
  )
}
