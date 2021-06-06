import React from 'react';
import './App.css';
import Form from './components/form/Form';

function App() {
  return (
    <div className="App">
      <h1>List Of Our Dream Cars</h1>
      <div className="registration-form container">
        <Form title="Create Form"/>   
      </div>
    </div>
  );
}

export default App;
