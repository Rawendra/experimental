import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";

const url =
  "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf?hsLang=en";
function App() {
  const [showPdf, setShowPdf] = useState(false);

  const objectRef = useRef(null);

  const handleClickAnchor = (e) => {
    e.preventDefault();
    alert("downloading the content");

    setTimeout(() => {
      window.location.assign(url);
    }, 500);
  };
  useEffect(() => {
    console.log("calling useEffect");
    console.log();
    setShowPdf(!navigator.userAgentData.mobile);
  }, []);

  const handleLoad = () => {
    console.log("load event triggered");
    if (objectRef) {
      console.log(objectRef);
    }
  };
  const handleError = () => {
    console.log("Error event triggered");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <iframe
          src={url}
          ref={objectRef}
          type="application/pdf"
          onLoad={handleLoad}
          onError={handleError}
        >
          {showPdf && (
            <p>
              {" "}
              it seems your device doesn't support this file type{" "}
              <a onClick={handleClickAnchor} href={url}>
                Please click here
              </a>
            </p>
          )}
        </iframe>
      </header>
    </div>
  );
}

export default App;
