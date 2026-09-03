import React, { useState } from 'react'

export default function About(props) {

const [myStyle,setMyState]=useState(
{
  color:'#000',
  backgroundColor:'#fff'
})
const [text,newtext]=useState('Enable Black Mode');

const toggleStyle=()=>{
  
if(myStyle.color==='#fff'){
  newtext('Enable Black Mode');
  setMyState({
  color:'#000',
  backgroundColor:'#fff'


})
}else{
    newtext('Enable White Mode');
 setMyState({
  color:'#fff',
  backgroundColor:'#000',
  border:'1px solid #fff',
})
}
}

  return (
    <div>

      <div className="container mt-5" style={myStyle} >
        <h4 className="mb-4">{props.heading}</h4>

        <div id="myAccordion">


          <div className="card mb-2" style={myStyle}>
            <div className="card-header p-0" id="headingOne">
              <button style={myStyle} className="accordion-btn"  data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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


          <div className="card mb-2" style={myStyle}>
            <div className="card-header p-0" id="headingTwo">
              <button className="accordion-btn collapsed" style={myStyle}  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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


          <div className="card mb-2" style={myStyle}>
            <div className="card-header p-0" id="headingThree" >
              <button className="accordion-btn collapsed" style={myStyle}  data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
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
          <button className="btn btn-danger mt-3" onClick={toggleStyle}>{text}</button>
      </div>
    
    </div>
  )
}
