import React, { useState } from 'react';

export default function TextForm2(props) {
    const [text, setText] = useState('');

    const handleOnClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', "success");
    };

    const handleOnLower = () => {
        let lowtext = text.toLowerCase();
        setText(lowtext);
        props.showAlert('Converted to Lowercase', 'success');
    };

    const handleOnCapital = () => {
        let captxt = text.replace(/\b\w/g, (char) => char.toUpperCase());
        setText(captxt);
        props.showAlert('Converted to Capitalize', 'success');
    };

    const handleOnCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to Clipboard!', 'success');
    };

    const handleOnDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "my-text.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        props.showAlert('File Downloaded', 'success');
    };

    const handleOnClear = () => {
        setText(""); // Space (" ") ki jagah empty string ("")
        props.showAlert('Text Cleared', 'success');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    // Button status check (bina spaces ke check karega)
    const isTextEmpty = text.trim().length === 0;

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="form-group">
                    <h2 className='my-2'>{props.heading}</h2>
                    <textarea 
                        className="form-control" 
                        id="exampleTextarea" 
                        style={{
                            backgroundColor: props.mode === 'light' ? 'white' : '#212529', 
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }} 
                        rows="5" 
                        value={text} 
                        onChange={handleOnChange} 
                        placeholder="Enter text here..."
                    ></textarea>
                    
                    <button className="btn btn-primary mt-3" disabled={isTextEmpty} onClick={handleOnClick}>Convert Into Upper Case</button>
                    <button className="btn btn-primary mt-3 ml-3" disabled={isTextEmpty} onClick={handleOnLower}>Convert Into Lower Case</button>     
                    <button className="btn btn-primary mt-3 ml-3" disabled={isTextEmpty} onClick={handleOnCapital}>Convert Into Capitalize</button>
                    <button className="btn btn-primary mt-3 ml-3" disabled={isTextEmpty} onClick={handleOnCopy}>Copy</button>
                    <button className="btn btn-primary mt-3 ml-3" disabled={isTextEmpty} onClick={handleOnDownload}>Download</button>
                    <button className="btn btn-primary mt-3 ml-3" disabled={isTextEmpty} onClick={handleOnClear}>Clear Text</button>    
                </div>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} Words and {text.replace(/\s+/g, "").length} Characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes Read</p>
                <h3>Preview</h3>
                <p>{text.trim().length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    );
}