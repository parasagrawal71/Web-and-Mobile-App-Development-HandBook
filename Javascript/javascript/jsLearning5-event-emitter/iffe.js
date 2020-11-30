// **************************************************************************************************************************** //
// ************************************** Custom Event Emitter using IFFE ***************************************************** //
// **************************************************************************************************************************** //
(function () {
  const _events = {}; // Closure

  const subscribe = (eventName, eventListener) => {
    _events[eventName] = eventListener;
    console.log(`Subscribed to the event: ${eventName}`);
    console.log("_events: ", _events);
  };
  this.subscribe = subscribe;

  const emit = (eventName, data) => {
    console.log(`Event '${eventName}' is emitted !!!`);
    if (!_events[eventName]) {
      throw new Error(
        `Cannot emit the event, Event ${eventName} doesn't exists`
      );
    }

    const eventListenerCallback = _events[eventName];
    eventListenerCallback(data);
  };
  this.emit = emit;
})();

const addValues = () => {
  console.log("addValues callback/listener is called");
  const val1 = document.getElementById("input1").value;
  const val2 = document.getElementById("input2").value;
  const sum = Number(val1) + Number(val2);

  document.getElementById("result").innerHTML = sum;

  return sum;
};
subscribe("addValuesEvent", addValues);

const addNumbers = () => {
  emit("addValuesEvent", null);
};
