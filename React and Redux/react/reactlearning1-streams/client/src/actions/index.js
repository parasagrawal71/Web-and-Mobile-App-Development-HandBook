import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";
import streams from "../apis/streams";
import history from "../history";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// history object can be passed to this action creator from the component it is getting called which gets it from BrowserRouter
// in order to peforem programmatic navigation
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", {
    ...formValues,
    userId: userId,
  });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  // Programmatic Navigation
  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (streamId) => async (dispatch) => {
  const response = await streams.get(`/streams/${streamId}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (streamId, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${streamId}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (streamId) => async (dispatch) => {
  await streams.delete(`/streams/${streamId}`);

  dispatch({ type: DELETE_STREAM, payload: streamId });
};
