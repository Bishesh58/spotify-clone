export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //set token to null after finishing the project
  token: "BQDPMtHAel5YNyIULE9NdRutMhhdUSULCKETjn_BEzsSbLMW4TXtZNj0vgTchLovq0chh1FqMvPIIe6DPfCv75RCMxPao6nvWffeZL0wTT5td2tjfg-tdEgKIr8pV_eXO6UUGHJkVBslU3FHHRQjpzNQlyPON6ST",
};

const reducer = (state, action) => {
  //action -> type, [payload]
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      //new state
      return {
        ...state,
        user: action.user,
      };
      case "SET_TOKEN":
        return{
          ...state,
          token: action.token
        }
    default:
      return state;
  }
};

export default reducer;
