import React, { useState } from 'react';
export default function About2(props) {
   const [text,newtext]=useState('Enable White Mode');
  const [newStyle,setStyle]=useState(
    {
        color:'#fff',
        backgroundColor:'#000',
    })
   
    const ToggleEvent=()=>{
      
      if(newStyle.color==='#fff'){
          newtext('Enable Black Mode');
        setStyle({
          color:'#000',
          backgroundColor:'#fff'
      })
      }else{
         newtext('Enable White Mode');
          setStyle({
          color:'#fff',
          backgroundColor:'#000'
      })
      }
      
    }

  return (
    <div>
      <div>

      <div className="container mt-5"  style={newStyle}>
        <h4 className="mb-4">{props.heading}</h4>

        <div id="myAccordion">


          <div className="card mb-2"style={newStyle} >
            <div className="card-header p-0" id="headingOne">
              <button  className="accordion-btn" style={newStyle}  data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <span>Accordion Item #1</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>

            <div id="collapseOne" className="collapse show"  aria-labelledby="headingOne" data-parent="#myAccordion">
              <div className="card-body" >
                Pura header bar clickable hai. Right side me arrow open hone par rotate hota hai.
              </div>
            </div>
          </div>


          <div className="card mb-2" style={newStyle}>
            <div className="card-header p-0" id="headingTwo"style={newStyle}>
              <button className="accordion-btn collapsed"  style={newStyle}  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <span>Accordion Item #2</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>

            <div id="collapseTwo" className="collapse"  aria-labelledby="headingTwo" data-parent="#myAccordion">
              <div className="card-body">
                Yeh doosra section hai jo click karne par open hoga.
              </div>
            </div>
          </div>


          <div className="card mb-2" style={newStyle}>
            <div className="card-header p-0" id="headingThree" style={newStyle} >
              <button className="accordion-btn collapsed" style={newStyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <span>Accordion Item #3</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>

            <div id="collapseThree" className="collapse"  aria-labelledby="headingThree" data-parent="#myAccordion">
              <div className="card-body">
                Yeh teesra section hai.
              </div>
            </div>
          </div>

        </div>
          <button className="btn btn-danger mt-3" onClick={ToggleEvent}>{text}</button>
      </div>
    
    </div>
    </div>
  )
}
