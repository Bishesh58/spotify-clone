import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player';

//creating the instance of SpotifyWebApi to communicate back and forth with spotify
const spotify = new SpotifyWebApi();
function App() {
  const[token, setToken] = useState(null);

  //run code once when app loads based on give condition 
  useEffect(() => {
    const hash = getTokenFromUrl();
    //remove the token immediately after the authorization
    window.location.hash = "";
    const _token = hash.access_token;
    console.log("token", _token);
    if(_token){
      setToken(_token);

      //passing token to spotify api
      spotify.setAccessToken(_token);
      
      /* testing api response
       spotify.getMe().then(user => {
         console.log('person-->>', user);
       })
      */
    }
  }, [])
  return (
    <div className="app">
      {token ? (
       <Player />
      ):(
        <Login />
      )}
    
    </div>
  );
}

export default App;
