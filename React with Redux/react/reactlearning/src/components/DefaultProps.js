import React from "react";

const DefaultProps = props => {
  //   return <div>{props.message || "default text"}</div>; // Drawback: This needs to be added everywhere
  return <div>{props.message}</div>;
};

// Better way to set default value
DefaultProps.defaultProps = {
  message: "This is default value"
};

export default DefaultProps;
