import React from "react";
import globalHook from "use-global-hook";

// *** IMPORT actions *** //
import actions from "./actions";

const initialState = {
  counter: 0,
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
