// const addNumbers = () => {
//   const val1 = document.getElementById("input1").value;
//   const val2 = document.getElementById("input2").value;
//   const sum = val1 + val2;

//   document.getElementById("result").innerHTML = sum;

//   return sum;
// };

// **************************************************************************************************************************** //
// ************************************** Custom Event Emitter using ES6 class ************************************************ //
// **************************************************************************************************************************** //

class CustomEventEmitter {
  constructor() {
    this._events = {};
  }

  on(eventName, eventListener) {
    // Subscription to an event
    if (!this._events[eventName]) {
      this._events[eventName] = [];
    }

    this._events[eventName].push(eventListener);
    console.log(`Subscribed to the event: ${eventName}`);
    console.log("_events: ", this._events);

    // If we want only one listener attached to an event, we can use something like this instead of an array
    // this._events[eventName] = eventListener;
  }

  removeListener(eventName, eventListener) {
    // To pop-up a listener from listeners array
    if (!this._events[eventName]) {
      throw new Error(
        `Cannot remove listener, Event ${eventName} doesn't exists`
      );
    }

    this._events[eventName] = this._events[eventName].filter(
      (listener) => listener !== eventListener
    );
  }

  emit(eventName, data) {
    console.log(`Event '${eventName}' is emitted !!!`);
    if (!this._events[eventName]) {
      throw new Error(
        `Cannot emit the event, Event ${eventName} doesn't exists`
      );
    }

    // All listeners to the current event with name = eventName
    const allListeners = this._events[eventName];
    allListeners.forEach((listener) => listener(data));
  }
}

const addValues = () => {
  console.log("addValues callback/listener is called");
  const val1 = document.getElementById("input1").value;
  const val2 = document.getElementById("input2").value;
  const sum = Number(val1) + Number(val2);

  document.getElementById("result").innerHTML = sum;

  return sum;
};

const myEventEmitter = new CustomEventEmitter();
myEventEmitter.on("addValuesEvent", addValues);

const addNumbers = () => {
  myEventEmitter.emit("addValuesEvent", null);
};
