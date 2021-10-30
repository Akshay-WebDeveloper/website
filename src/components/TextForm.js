import React, { useState } from "react";
// useSate is a hook help to create state variable
// Hooks are a new addition in React 16.8 that let you use state and other react feature without writing class.

export default function TextForm(props) {
  //how to handle event
  //uppercase
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  //lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  //clear text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  //copy text
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard!", "success");
  };

  //Remove Extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); //have used Regex to remove spaces
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  //change
  const handleOnChange = (event) => {
    // console.log("handleOnChange");
    //how to set state
    setText(event.target.value);
  };

  //   const [text, setText] = useState("Enter text here");
  const [text, setText] = useState("");
  //   text = "new text"; //wrong way to change the state
  //   setText("new text"); //correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} <b>Words and</b> {text.length}{" "}
          <b>character</b>
        </p>
        <p>
          {0.008 * text.split(" ").length} <b>Minutes to read</b>
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the  textbox to preview it here."}
        </p>
      </div>
    </>
  );
}
