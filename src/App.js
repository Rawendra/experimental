import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
const url =
  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
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
    const para = document.createElement("p");
    const node = document.createTextNode(
      `it seems your device doesn't support this file type`
    );
    para.appendChild(node);
    const anchor = document.createElement("a");
    anchor.setAttribute("href", url);
    anchor.addEventListener("click", handleClickAnchor);
    const anchorText = document.createTextNode(`Please click here`);
    anchor.appendChild(anchorText);
    para.appendChild(anchor);

    const pdfObject = document.createElement("object");
    pdfObject.setAttribute("data", url);
    pdfObject.setAttribute("type", "application/pdf");
    pdfObject.addEventListener("load", () => {
      console.log("loaded");
    });

    pdfObject.addEventListener("error", () => {
      console.log("error occured");
    });
    pdfObject.appendChild(para);

    const pdfContainer = document.createElement("div");
    pdfContainer.appendChild(pdfObject);
    pdfContainer.setAttribute("id", "pdfContainer");
    document.body.appendChild(pdfContainer);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
