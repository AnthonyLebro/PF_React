import React ,{ useContext } from 'react';
import DarkMode from './DarkMode';

const DarkBtn = () => {
  const {darkMode, toggleMode} = useContext (DarkMode)
  console.log(darkMode)

  return (
      <span className="darkbtn" onClick={toggleMode}>{darkMode? <i className="far fa-sun"></i> : <i className="far fa-moon"></i> }</span>
  );
};

export default DarkBtn;