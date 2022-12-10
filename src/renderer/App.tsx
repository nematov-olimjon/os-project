import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { SignUp } from './SignUp';
import { Login } from './Login';
import Main from "./Main";
import './App.css';

const Hello = () => {
  const [page, setPage] = React.useState(false);

  function handleClick(state: boolean) {
    setPage(state);
  }
  return (
    <div className="content">
      <div className="button-group">
        <div className="submit">
          <button onClick={() => handleClick(false)}>Login</button>
        </div>
        <div className="signUp">
          <button id="signUp" onClick={() => handleClick(true)}>
            Sign Up
          </button>
        </div>
      </div>
      {page === true ? <SignUp /> : <Login />}
    </div>
    //<div id='root'><Main/></div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
