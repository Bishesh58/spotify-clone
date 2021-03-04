import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";
import { useStateProviderValue } from "./Context/StateProvider";

//creating the instance of SpotifyWebApi to communicate back and forth with spotify
const spotify = new SpotifyWebApi();
function App() {
  //pull user from stateProvider
  const [{ user, token }, dispatch] = useStateProviderValue();

  //run code once when app loads based on give condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    //remove the token immediately after the authorization
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
        dispatch({
          type: "SET_TOKEN",
          token: _token,
        })

      //passing token to spotify api
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        //store user in stateProvider
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);
 
  return <div className="app">{token ? <Player spotify={spotify}/> : <Login />}</div>;
}

export default App;
