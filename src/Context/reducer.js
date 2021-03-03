export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
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
    default:
      return state;
  }
};

export default reducer;
