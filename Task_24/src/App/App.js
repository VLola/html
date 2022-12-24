import { useState, useEffect, useRef } from "react";
import './App.css';
import Timer from '../Timer/Timer';

function App() {
  return (
    <>
      <div className="App">
        <div className="Time">
          <Timer hours="0" minutes="0" seconds="5"></Timer>
          <Timer hours="1" minutes="20" seconds="25"></Timer>
          <Timer hours="5" minutes="6"></Timer>
        </div>
      </div>
    </>
  );
}

export default App;