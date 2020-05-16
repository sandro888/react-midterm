import React from 'react';
import './App.css';
import User from "./components/GetUsers"
import SignUp from "./components/SignUp"
function App() {
  return (
    <div className="App">
      <User/>
      <SignUp/>
    </div>
  );
}

export default App;
