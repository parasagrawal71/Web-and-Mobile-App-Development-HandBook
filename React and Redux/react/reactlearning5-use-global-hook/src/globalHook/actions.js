const actions = {
  addToCounter: (store, value) => {
    store.setState({ counter: store.state.counter + value });
  },
  setAnother: (store, value) => {
    store.setState({ another: true });
  },
};

export default actions;
