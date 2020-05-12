const actions = {
  addToCounter: (store, value) => {
    store.setState({ counter: store.state.counter + value });
  },
};

export default actions;
