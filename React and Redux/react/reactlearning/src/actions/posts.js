import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash';

/*
// Action Creators
export const fetchAllPosts = async () => {
  // Bad Approach!!! and Why?
  // Ans -> Error: Actions must be plain objects. Use custom middleware for async actions.
  const response = await jsonPlaceholder.get("/posts");
  //   console.clear();
  //   console.log(response); // API Status:200. Fetching the data successfully.

  // Trying out without async await
  //   const promise = jsonPlaceholder.get("/posts"); // It returns data after sometime

  return {
    type: "FETCH_POSTS",
    payload: response,
    // payload: response.data, // NOT WORKING
    // payload: promise,
  };
};

// What's wrong?

// 1) Action Creator must return plain object. fetchAllPosts is not doing so.
// Whether it's looking like a plain object, but we know our code is converted in ES2015 syntax eventually to be run in browser by Babel.
// So After pasting the function starting from "const fetchAllPosts = ..." into bablejs.io, we can see it's not a plain object.
// It's because of async await. If we remove it, it turns into a plain object.

// 2) By the time our action gets to a reducer, we won't have fetched our data.
// As said we remove async await, return value will be a plain object
// Let's try it, there is no Error but api returns data after sometime

// Solution:-
// Use custom middleware for async actions.
*/

// ------------------------------------------------------------------------------------------------------------------------------------

// // Action Creators
// export const fetchAllPosts = () => {
//   return async dispatch => { // (dispatch, getState) - getState is optional
//     const response = await jsonPlaceholder.get("/posts");

//     // Instead of returning an action, we will dispatch our action manually
//     // return {
//     //   type: "FETCH_POSTS",
//     //   payload: promise,
//     // };

//     dispatch({
//       type: "FETCH_POSTS",
//       payload: response,
//     });

//   };
// };

// Using ES2015 Syntax, In short
// Action Creators
export const fetchAllPosts = () => async dispatch => { 
    const response = await jsonPlaceholder.get("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
};

export const fetchUser = (userId) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  })
}

// Two types of Solution for calling API only once for each user(Solution for Overfetching)
// --------------------------------------
// Ist Solution:- lodash memoize function
// Disadvantage:- If for some reason(eg, user data has been changed), we want to re-fetch user details we can't.
// So we have to create a separate action creator to re-fetch user details.

// export const fetchUser = _.memoize(function (userId) { // still getting called multiple times with same userId
//   return async function (dispatch){
//   const response = await jsonPlaceholder.get(`/users/${userId}`);

//     dispatch({
//       type: 'FETCH_USER',
//       payload: response.data,
//     })
//   }
// });

// export const fetchUser = function (userId) { // still getting called multiple times with same userId
//   return _.memoize(async function (dispatch){
//   const response = await jsonPlaceholder.get(`/users/${userId}`);

//     dispatch({
//       type: 'FETCH_USER',
//       payload: response.data,
//     })
//   });
// };

// export const fetchUser = _.memoize(function (userId) { // WORKING
//   return _.memoize(async function (dispatch){
//   const response = await jsonPlaceholder.get(`/users/${userId}`);

//     dispatch({
//       type: 'FETCH_USER',
//       payload: response.data,
//     })
//   });
// });

// export const fetchUser = (userId) => (dispatch) => _fetchUser(userId, dispatch);

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//   // Underscore means this is a private function. So other engineers should not call this unless they know what they are doing it.
//   const response = await jsonPlaceholder.get(`/users/${userId}`);

//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data,
//   })
// })

// 2nd Solution:-

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchAllPosts()); // fetchAllPosts returns a function to redux-thunk

  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(id => {
  //   dispatch(fetchUser(id));
  // }) 
  
  // // forEach doesn't work with async await, use map Instead
  // await Promise.all(userIds.map(id => {
  //   dispatch(fetchUser(id));
  // }))
  // await Promise.all(userIds.forEach(id => { // ERROR
  //   dispatch(fetchUser(id));
  // }))

  _.chain(getState().posts)
    .map('userId') // first argument will be getState().posts to the map function
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()

  console.log(getState().users)
}