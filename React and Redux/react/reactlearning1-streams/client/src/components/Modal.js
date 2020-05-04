import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ title, content, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => {
        onDismiss();
      }}
      className="ui dimmer modals visible active"
    >
      {/* Event Propagation */}
      {/* Default JS or default HTML behaviour:- if we ever trigger an event on some
      child elements and that child element does not handle that event, the
      event is going to bubble up to some parent element until it's eventually
      caught with an event handler. */}
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="ui standard modal visible active"
      >
        <div class="header">{title}</div>
        <div class="content">{content}</div>
        <div class="actions">{actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
