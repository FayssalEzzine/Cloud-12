import React from 'react';
import './join_class.css';


function join_class() {
  return (
    <div className="container">
      <div className="t">X Join a Class</div>
      <button className="join-button">
        <a className="t1">Join the Class</a>
      </button>
      <div className="r"></div>
      <p className="e">You are logged in as</p>
      <div className="person">
        <img src="assets/pr.jpg" alt="Avatar" className="e11" />
        <span className="e1">hassan oudrar</span>
      </div>
      <a className="e2">hassan111@gmail.com</a>
      <a className="e3">class code</a>
      <a className="e4">Ask your teacher for the course code, then enter it here.</a>
      <input className="f" type="text" name="pseudo" placeholder="Enter code here" />
      <ul className="list-disc ml-6">
        <li className="l11">Use a course code consisting of 5 to 7 letters or numbers, without spaces or symbols</li>
        <li className="l22">The code will expire in 48 hours</li>
      </ul>
    </div>
  );
}

export default join_class;
