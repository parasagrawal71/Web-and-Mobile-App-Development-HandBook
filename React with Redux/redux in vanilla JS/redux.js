// Example of Insurance Company //
// Dropping off a form --> Form --> Form Reciever --> Departments --> All Department Data
console.clear();

// ------------------------------------------- Action Creators ------------------------------------------------ //
// People Dropping off a form (Action Creator that is a function)
const createPolicy = (name, amount) => {
  return {
    // Form (Action that is an object)
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};

// Action Creator
const deletePolicy = (name) => {
  return {
    // Action
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
};

// Action Creator
const createClaim = (name, claimAmount) => {
  return {
    // Action
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amount: claimAmount,
    },
  };
};

// ------------------------------------------------ Reducers -------------------------------------------------- //
// Departments (Reducers)
const claimsHistory = (oldListOfClaims = [], action) => {
  // For very first time, oldListOfClaims will be undefined. In that case, undefined is replaced by empty array.
  if (action.type === "CREATE_CLAIM") {
    // Avoid modifying an existing array and create new everytime.
    return [...oldListOfClaims, action.payload]; // Creating a new array here!!!
  }
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  // Initial Money in the bag = $100
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amount;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((name) => name !== action.payload.name);
  }
  return listOfPolicies;
};

// ------------------------------------------------ Redux Store -------------------------------------------------- //
// All action creators and reducers are written in vanilla JS.
// A store(single object) in redux is the assembly of a collection of different action creators and reducers.
// console.log(Redux);
const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  // moneyWeHave: claimsHistory, // Key name can be different
  claimsHistory: claimsHistory,
  accounting: accounting,
  policies: policies,
});

const store = createStore(ourDepartments); // Passing combined Reducers to createStore.
// console.log(store);
// // Magical Store Object
// // The store object represents our entire redux application.
// // It contains references to all of our different reducers and to all of our state(or, data) produced by those reducers.
// // Store contains some functions that we are going to use such as dispatch, getState.

// const action = createPolicy('Paras', 20); // action is an object created by action creator.
// console.log(action);

// store.dispatch(action); // dispatch gives copies of action to every reducers.

// console.log(store.getState());

store.dispatch(createPolicy("Paras", 20));
store.dispatch(createPolicy("Paras", 20)); // Accepting same name
store.dispatch(createPolicy("Alex", 30));
store.dispatch(createPolicy("Amit", 40));

store.dispatch(createClaim("Alex", 120));
// store.dispatch(createClaim('Paras', 120)); // Just creating a claim with name = Paras
// store.dispatch(createClaim('Alex', 120)); // Gives negative value
// Creates two claims with same name
store.dispatch(createClaim("Paras", 120));
store.dispatch(createClaim("Paras", 120));

store.dispatch(deletePolicy("Alex"));
// store.dispatch(deletePolicy('Paras')); // Deleting both Paras

console.log(store.getState());
console.log(store.getState().claimsHistory);
console.log(store.getState().accounting);
console.log(store.getState().policies);

// We can change the state by only creating an action using action creators and feeding them to dispatch function.
// Following is wrong:-
// store.state.keyName = 20 (something like this)
// console.log("printme",store.accouting) (Doesn't work)
// console.log("printme",store.state.accouting) (Doesn't work)
