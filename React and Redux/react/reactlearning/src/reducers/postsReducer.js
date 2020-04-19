// Reducers
export default (state = [], action) => {
  // state is posts array. Convention is to use name 'state'.

  // if (action.type === 'FETCH_POSTS') {
  //   return action.payload;
  // }

  // return state;

  // Instead use SWITCH Statement
  switch (action.type) {
    case 'FETCH_POSTS' :
      return action.payload;
    default: return state;
  }
};