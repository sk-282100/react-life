import React, { useState } from 'react'
import TextSummary from './TextSummary';

export default function TextUtils() {
  const [first, setfirst] = useState('');
  const [wordCount, setwordCount] = useState(0);
  const [characterCount, setcharacterCount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const newText = first.toLocaleUpperCase();
    setfirst(newText);
    setwordCount(newText.split(' ').length);
    setcharacterCount(newText.length);
  }

  const handleOnchanged = (event) => {
    setfirst(event.target.value);
  }

  const handleClearText = (event) => {
    setfirst('');
    setwordCount(0);
    setcharacterCount(0);
  }

  return (
    <>
      <div className="container">
        <h2>Please Enter text to analysis</h2>
        <textarea className="form-control" value={first} onChange={handleOnchanged} id="exampleFormControlTextarea1" rows="10"></textarea>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary my-3" onClick={handleSubmit}>Convert To Upper Case</button>
          <button type="submit" className="btn btn-primary my-3 mx-2" onClick={handleClearText}>Clear Text</button>
        </div>
      </div>
      <TextSummary  wordCount={wordCount} characterCount={characterCount}></TextSummary>
    </>
  );
}