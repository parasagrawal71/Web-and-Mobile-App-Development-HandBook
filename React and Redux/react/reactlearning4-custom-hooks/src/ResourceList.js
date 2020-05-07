import React from "react";
import { useResources } from "./hooks/useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return <div className="ResourceList">{resources[0]}</div>;
};

export default ResourceList;
