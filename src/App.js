import "./App.css";
import React, { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

//downloaded Router package - npm install react-router-dom
//importing Router - navigate without page reload to one component to another
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />

      {/* Alert */}
      <Alert alert={alert} />

      {/* for default props */}
      {/* <Navbar /> */}
      <div className="container my-3">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}
        {/* 
            To Navigate and complete match use "exact path" bcz only "path" does partial matching 
            EX- /user --> compoenent1
                /user/home -->component2
            */}
        {/* <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyse below"
                mode={mode}
              />
            </Route>
          </Switch> */}

        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyse below"
          mode={mode}
        />
        {/* <About /> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
