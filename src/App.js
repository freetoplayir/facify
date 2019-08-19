import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Logo from './Components/Logo/Logo';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Logo />
      {/* 
      <ImageLink/>
      <FaceRecognition/>
    */}
    </div>
  );
};

export default App;
