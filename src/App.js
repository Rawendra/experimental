import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

const url="http://www.africau.edu/images/default/sample.pdf"
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
        url
      );
    }, 500);
  };
  useEffect(() => {
    console.log("calling useEffect");
    setShowPdf(true)
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

       { showPdf && <object
          data={url}
          type="application/pdf"
        >
          <p>
            it seems your device doesn't support this file type
            <a
              onClick={handleClickAnchor}
              href={url}
            >
              Please click here
            </a>
          </p>
        </object>}
      </header>
    </div>
  );
}

export default App;