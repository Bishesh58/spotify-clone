import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';

function App() {
  const[token, setToken] = useState(null);

  //run code once when app loads based on give condition 
  useEffect(() => {
    const _token = getTokenFromUrl();
    console.log("I've a token", token);
    //remove the token immediately after the authorization
    window.location.hash = "";
    if(_token){
      setToken(_token);
    }
  }, [])
  return (
    <div className="app">
      {token ? (
        <h2>I'm login in</h2>
      ):(
        <Login />
      )}
    
    </div>
  );
}

export default App;
