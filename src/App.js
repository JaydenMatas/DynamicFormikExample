import React from 'react';
import logo from './logo.svg';
import DynamicFormik from './forms/DynamicFormik';



const testFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "input",
    value: "Jackson"
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "input",
    value: "Meyer"
  }
]

function App() {
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
      </header>
      <DynamicFormik fields={testFields} />
    </div>
  );
}

export default App;
