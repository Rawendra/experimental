import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [showPdf, setShowPdf] = useState(false);
  const handleClick = () => {
    setShowPdf((state) => !state);
  };
  const handleClickAnchor = (e) => {
    e.preventDefault();
    alert("downloading the content");

    setTimeout(() => {
      window.location.assign(
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      );
    }, 500);
  };
  useEffect(() => {
    console.log("calling useEffect");
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <object
          data="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          type="application/pdf"
          width="300"
          height="200"
        >
          <p>it seems your device doesn't support this file type
          <a
            onClick={handleClickAnchor}
            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          >
            Please click here
          </a></p>
        </object>
      </header>
    </div>
  );
}

export default App;