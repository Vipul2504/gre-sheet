import axios from "axios";
import React, { useState } from "react";


const GRESHEET = () => {

  const [Words, setWords] = useState("")
  const [Meaning, setMeaning] = useState("")
  const [Sentence, setSentence] = useState("")
  const [Adj, setAdj] = useState("")
  const [Syn, setSyn] = useState("")
  const [Hindi, setHindi] = useState("")
  
    const onSubmitBtn = (e) => {
      e.preventDefault();
      const data = {
        Words:Words,
        Meaning:Meaning,
        Sentence:Sentence,
        Adj:Adj,
        Syn:Syn,
        Hindi:Hindi
      }
      axios.post('https://sheet.best/api/sheets/859b2d1f-2747-47db-9e24-b5efedc6918b',data).then((res) => {
        console.log(res)
      })
    }
    return (
      <form autoComplete="on" className="ui form">
      <div className="field">
        <label>Words</label>
        <input type="text" name="Words" placeholder="Enter Word" onChange = {(e) => setWords(e.target.value)}/>
      </div>
      <div className="field">
        <label>Meaning</label>
        <input type="text" name="Meaning" placeholder="Enter Meaning"  onChange = {(e) => setMeaning(e.target.value)}/>
      </div>
      <div className="field">
        <label>Sentence</label>
        <input type="text" name="Sentence" placeholder="Enter Sentence"  onChange = {(e) => setSentence(e.target.value)}/>
      </div>
      <div className="field">
        <label>Adj</label>
        <input type="text" name="Adj" placeholder="Enter Adjective"  onChange = {(e) => setAdj(e.target.value)}/>
      </div>
      <div className="field">
        <label>Syn</label>
        <input type="text" name="Syn" placeholder="Enter Synonyms"  onChange = {(e) => setSyn(e.target.value)}/>
      </div>
      <div className="field">
        <label>Hindi</label>
        <input type="text" name="Hindi" placeholder="Enter Meaning in Hindi"  onChange = {(e) => setHindi(e.target.value)}/>
      </div>
      <button className="ui button" type="submit" onSubmit={onSubmitBtn}>Submit</button>
    </form>
    );
  }
  
  export default GRESHEET;